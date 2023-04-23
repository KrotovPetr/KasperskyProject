import { sequelize } from '../../db';
import { Model } from 'sequelize-typescript';
import { DataTypes } from 'sequelize';
import { UsersGroupsType } from '../types/userGroupsType';

//
// export const UserGroup = sequelize.define<Model<UsersGroupsType>>(
//     'groups_users',
//     {
//         idGroupsUsers: {
//             type: DataTypes.INTEGER,
//             primaryKey: true,
//             autoIncrement: true,
//             allowNull: false,
//             unique: true
//         }
//     },
//     {
//         createdAt: false,
//         updatedAt: false,
//         tableName: 'groups_users'
//     }
// );
