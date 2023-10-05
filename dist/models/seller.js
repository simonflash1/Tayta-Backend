"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../db"));
class Seller extends sequelize_1.Model {
}
Seller.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nombre: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    apellidoPaterno: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    apellidoMaterno: {
        type: sequelize_1.DataTypes.STRING,
    },
    dni: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    domicilio: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    telefono: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    municipioId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        //      references: {
        //        model: 'Municipio',
        //        key: 'id',
        //      },
    },
}, {
    sequelize: db_1.default,
    modelName: 'Seller',
    tableName: 'sellers',
    timestamps: true,
});
exports.default = Seller;
