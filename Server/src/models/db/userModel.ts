import { sequelize } from '../../db';
import { Model } from 'sequelize-typescript';
import { UserType } from '../types/userType';
import { DataTypes } from 'sequelize';

export const User = sequelize.define<Model<UserType>>(
    'users',
    {
        idUser: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            unique: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        domain: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        post: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        createdAt: false,
        updatedAt: false,
        tableName: 'users',
    }
);
