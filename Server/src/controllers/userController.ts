import express from 'express';
import { Group, User } from '../models/db/groupModel';
import { Op } from 'sequelize';
import { UserType } from '../models/types/userType';
import { Model } from 'sequelize-typescript';
import {sequelize} from "../db";

class UserController {
    async getAllUsersWithSort(
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) {
        try {
            const {
                currentColumnSort = '',
                searchPattern = '',
                sortDirection = '',
            } = req.query;
            const columnsToSearch: string[] = [
                'name',
                'domain',
                'phone',
                'email',
            ];
            let users: Model<UserType, UserType>[] | {} = {};
            if (currentColumnSort === '' || sortDirection === '') {
                users = await User.findAll({
                    include: { model: Group, attributes: ['name'] },
                    where: {
                        [Op.or]: columnsToSearch.map((column) => ({
                            [column]: {
                                [Op.like]: `%${searchPattern}%`,
                            },
                        })),
                    },
                });
            } else {
                users = await User.findAll({
                    order: [[`${currentColumnSort}`, `${sortDirection}`]],
                    include: { model: Group, attributes: ['name'] },
                    where: {
                        [Op.or]: columnsToSearch.map((column) => ({
                            [column]: {
                                [Op.like]: `%${searchPattern}%`,
                            },
                        })),
                    },
                });
            }
            const [result, metadata] = await sequelize.query('SELECT * FROM users;')
            console.log(result);
            return res.status(200).json({ users });
        } catch (e) {
            next(e);
        }
    }

    async getUserById(
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) {
        try {
            const { id } = req.query;
            const user = await User.findOne({ where: { idUser: Number(id) } });
            return res.status(200).json({ user });
        } catch (e) {
            next(e);
        }
    }
}

export default new UserController();
