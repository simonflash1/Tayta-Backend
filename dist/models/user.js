"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../db"));
class User extends sequelize_1.Model {
    verifyPassword(passwordToCheck) {
        return this.password === passwordToCheck;
    }
}
User.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    rol: {
        type: sequelize_1.DataTypes.ENUM('admin', 'municipalidad'),
        allowNull: false,
    },
    idPais: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    idDepartamento: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    idMunicipalidad: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
    },
    nombreEntidad: {
        type: sequelize_1.DataTypes.STRING,
    },
    username: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    nombres: {
        type: sequelize_1.DataTypes.STRING,
    },
    apellidoPaterno: {
        type: sequelize_1.DataTypes.STRING,
    },
    apellidoMaterno: {
        type: sequelize_1.DataTypes.STRING,
    },
    dni: {
        type: sequelize_1.DataTypes.STRING,
    },
    domicilio: {
        type: sequelize_1.DataTypes.STRING,
    },
    telefono: {
        type: sequelize_1.DataTypes.STRING,
    },
}, {
    sequelize: db_1.default,
    modelName: 'Usuario',
    tableName: 'usuarios',
    timestamps: true,
});
exports.default = User;
