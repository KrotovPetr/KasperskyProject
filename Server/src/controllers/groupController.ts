import express from "express";
import { Group, User } from "../models/db/groupModel";
import {ApiError} from "../exceptions/apiError";

class GroupController {
  async getAllGroups(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    try {
      const groupsWithUsers: any = await Group.findAll({
        include: { model: User, attributes: ["name", "post"] },
      });
      return res.status(200).json({ groups: groupsWithUsers });
    } catch (e) {
      next(e)
    }
  }

  async addNewGroup(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    try {
      const { name } = req.body;
      const group = await Group.findOne({ where: { name } });
      let result = {};
      if (group === null) {
        result = await Group.create({ name });
      } else {
        throw ApiError.BadRequest("This group has already exist!");
      }
      return res.status(201).json("Success!");
    } catch (e) {
      next(e)
    }
  }
}

export default new GroupController();
