import { DataTypes } from 'sequelize';
import { Group } from './group';
import { User } from './userModel';
import { sequelize } from '../../db';
import { Model } from 'sequelize-typescript';
import { UsersGroupsType } from '../types/userGroupsType';

export const UserGroup = sequelize.define<Model<UsersGroupsType>>(
    'groups_users',
    {
        idGroupsUsers: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            unique: true,
        },
        idGroup: {
            type: DataTypes.INTEGER,
            references: {
                model: Group,
                key: 'idGroup',
            },
        },
        idUser: {
            type: DataTypes.INTEGER,
            references: {
                model: User,
                key: 'idUser',
            },
        },
    },
    {
        createdAt: false,
        updatedAt: false,
        tableName: 'groups_users',
    }
);
