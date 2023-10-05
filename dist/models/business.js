"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../db"));
class Negocio extends sequelize_1.Model {
}
Negocio.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    idProductor: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    nombreNegocio: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    categoria: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize: db_1.default,
    modelName: 'Negocio',
    tableName: 'negocios',
    timestamps: true,
});
exports.default = Negocio;
