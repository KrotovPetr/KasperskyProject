import { Sequelize } from 'sequelize-typescript';
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USER } from './config';
export const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    dialect: 'postgres',
    host: DB_HOST,
    port: 5434,
    models: [__dirname + '/models'],
    logging: (...msg) => {
        console.log(new Date().toLocaleString() + ' — ' + msg[0] + '\n');
    },
});
