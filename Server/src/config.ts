import dotenv from 'dotenv';

dotenv.config();

export const PORT: string = process.env.PORT;
export const DB_NAME: string = process.env.DB_NAME;
export const DB_USER: string = process.env.DB_USER;
export const DB_PASSWORD: string = process.env.DB_PASSWORD;
