
import express from "express";
import {Group, User} from "../models/db/groupModel";


class GroupController{

    async getAllGroups(req: express.Request, res: express.Response, next: express.NextFunction){
        try{
            const groupsWithUsers: any =  await Group.findAll({ include: {model: User, attributes: ["name", "post"]}});
            return res.status(200).json({groups: groupsWithUsers});
        } catch(e){
            console.log(e);
        }
    }

    async addNewGroup(req: express.Request, res: express.Response, next: express.NextFunction){
        try{
            const {name} = req.body;
            const group = await Group.findOne({where: {name}})
            let result = {};
            if(group === null){
               result =  await Group.create({name});
            } else {
                throw new Error("This group has already exist!")
            }
            return res.status(201).json("Success!");
        }catch(e){
            console.log(e);
        }
    }


}


export default new GroupController();