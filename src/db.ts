import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

const {
  DB_USER, DB_PASSWORD, DB_HOST,
} = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/Tayta`, {
  dialect: 'postgres', // El dialecto de tu base de datos
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false // Esto puede variar según tu base de datos
    }
  }
});

export default sequelize;
