import { sequelize } from '../../db';
import { Model } from 'sequelize-typescript';
import { DataTypes } from 'sequelize';
import { GroupType } from '../types/groupType';
import { User } from './userModel';

export const Group = sequelize.define<Model<GroupType>>(
    'groups',
    {
        idGroup: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            unique: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
    },
    {
        createdAt: false,
        updatedAt: false,
        tableName: 'groups',
    }
);

User.belongsToMany(Group, { through: 'groups_users' });
Group.belongsToMany(User, { through: 'groups_users' });
