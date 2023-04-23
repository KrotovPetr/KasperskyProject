import {sequelize} from "../../db";
import {Model} from "sequelize-typescript";
import {DataTypes} from "sequelize";
import {GroupType} from "../types/groupType";
import {UserType} from "../types/userType";
import {UsersGroupsType} from "../types/userGroupsType";

export const Group = sequelize.define<Model<GroupType>>(
    'groups',
    {
        idGroup: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            unique: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    },
    {
        createdAt: false,
        updatedAt: false,
        tableName: 'groups'
    }
);


export const User = sequelize.define<Model<UserType>>(
    'users',
    {
        idUser: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            unique: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        domain: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        post: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        createdAt: false,
        updatedAt: false,
        tableName: 'users'
    }
);


// export const UserGroup = sequelize.define<Model<UsersGroupsType>>(
//     'groups_users',
//     {
//         idGroupsUsers: {
//             type: DataTypes.INTEGER,
//             primaryKey: true,
//             autoIncrement: true,
//             allowNull: false,
//             unique: true
//         },
//         idGroup: {
//             type: DataTypes.INTEGER,
//             references: {
//                 model: Group,
//                 key: 'idGroup'
//             }
//         },
//         idUser: {
//             type: DataTypes.INTEGER,
//             references: {
//                 model: User,
//                 key: 'idUser'
//             }
//         }
//     },
//     {
//         createdAt: false,
//         updatedAt: false,
//         tableName: 'groups_users'
//     }
// );
User.belongsToMany(Group, {through: 'groups_users'});
Group.belongsToMany(User, {through: 'groups_users'});