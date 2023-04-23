import express from 'express';
import { Group, User } from '../models/db/groupModel';
import { ApiError } from '../exceptions/apiError';
import { Model } from 'sequelize-typescript';
import { GroupType } from '../models/types/groupType';
import {Op} from "sequelize";

class GroupController {
    async getAllGroups(
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) {
        try {
            const {searchPattern = ""} = req.query;
            console.log(req.query)
            const groupsWithUsers: Model<GroupType, GroupType>[] =
                await Group.findAll({
                    include: { model: User, attributes: ['name', 'post'],  where: {
                            name:{[Op.like]: `%${searchPattern}%`},
                        }, required: false},

                });
            return res.status(200).json({ groups: groupsWithUsers});
        } catch (e) {
            next(e);
        }
    }

    async addNewGroup(
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) {
        try {
            const { name } = req.body;
            const group: Model<GroupType, GroupType> = await Group.findOne({
                where: { name },
            });
            if (group === null) {
                await Group.create({ name });
            } else {
                throw ApiError.BadRequest('This group has already exist!');
            }
            return res.status(201).json('Success!');
        } catch (e) {
            next(e);
        }
    }
}

export default new GroupController();
