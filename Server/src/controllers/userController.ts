import express from 'express';
import { Group } from '../models/db/group';
import { Op } from 'sequelize';
import { UserType } from '../models/types/userType';
import { Model } from 'sequelize-typescript';
import { User } from '../models/db/userModel';

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
            return res.status(200).json({ users });
        } catch (e) {
            next(e);
        }
    }
}

export default new UserController();
