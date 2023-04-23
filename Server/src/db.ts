import { Sequelize } from 'sequelize-typescript';
import {DB_NAME, DB_PASSWORD, DB_USER } from './config';
export const sequelize = new Sequelize('kaspdb', 'postgres', 'postgres', {
    dialect: 'postgres',
    host: 'postgres',
    port: 5432,
    models: [__dirname + '/models'],
    logging: (...msg) => {
        console.log(new Date().toLocaleString() + ' — ' + msg[0] + '\n');
    },
});
