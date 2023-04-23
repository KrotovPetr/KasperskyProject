import express from "express";
import {Group, User} from "../models/db/groupModel";
import {Op} from "sequelize";


class UserController{

    async getAllUsersWithSort(req: express.Request, res: express.Response, next: express.NextFunction){
        try{
            console.log(req.query)
            const {currentColumnSort = "", searchPattern = "", sortDirection = ""} = req.query;
            const columnsToSearch = ['name', 'domain', 'phone', 'email'];
            let users = {};
            if(currentColumnSort === "" && sortDirection === ""){
                users = await User.findAll({include: {model:Group, attributes: ["name"]}, where:{
                        [Op.or]: columnsToSearch.map((column) => ({
                            [column]: {
                                [Op.like]: `%${searchPattern}%`,
                            },
                        })),
                    }, });
            } else {
                users = await User.findAll({order: [[`${currentColumnSort}`,`${sortDirection}`]], include: {model:Group, attributes: ["name"]}, where:{
                        [Op.or]: columnsToSearch.map((column) => ({
                            [column]: {
                                [Op.like]: `%${searchPattern}%`,
                            },
                        })),
                    }, });
            }

            return res.status(200).json({users});
        } catch(e){
            console.log(e);
        }
    }

    async getUserById(req: express.Request, res: express.Response, next: express.NextFunction){
        try{
            const {id} = req.query;
            const user: any =  await User.findOne({where: {idUser: Number(id)}});
            return res.status(200).json({user});
        } catch(e){
            console.log(e);
        }
    }

    async UserSort(req: express.Request, res: express.Response, next: express.NextFunction){
        try{
            const {param, to} = req.query;
            const groups: any =  await User.findAll({order: [String(param), String(to)]});
            return res.status(200).json({groups});
        } catch(e){
            console.log(e);
        }
    }

    async CreateUser(req: express.Request, res: express.Response, next: express.NextFunction){
        try{
            const {name, domain, email, phone, post} = req.query;
            // const groups: any =  await User.create({name, domain, email, phone, post});
            return res.status(201).json("Success!");
        } catch(e){
            console.log(e);
        }
    }


}


export default new UserController();