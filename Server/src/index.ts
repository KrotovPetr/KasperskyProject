import express, {Express} from 'express';
import cors from 'cors';
import router from "./routes";
import * as fs from 'fs';
import * as path from 'path';
import {sequelize} from "./db";
import {DATABASE_URL, DB_NAME, PORT} from "./config";
import {refactorTheData} from "./utils";
const { Pool } = require('pg')

const app: Express = express();
const port: string | number = PORT ?? 5000;


app.use(cors());
app.use(express.json());
// const pool = new Pool({
//     connectionString: DATABASE_URL,
// })
app.use("/", router);
// app.use(errorMiddlewareFunction);
// app.get('/hello', (req, res) => {
//     res.send({ message: 'Hello WWW!' });
// });
console.log("Hi, docker!")
const connectToDb: () => Promise<void> = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        await sequelize.sync();
        console.log(`Connection to ${DB_NAME} has been established successfully.`);
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}


try {
    fs.unlinkSync(path.join(__dirname, 'access.log'));
} catch (e) {
}


connectToDb();

app.listen(port, (): void => console.log(`Server started on port ${port}`))