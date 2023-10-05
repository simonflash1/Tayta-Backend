"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../db"));
class Product extends sequelize_1.Model {
}
Product.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nombre: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    categoria: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    descripcion: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    imagen: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    unidadMedida: {
        type: sequelize_1.DataTypes.ENUM('unidad', 'kg', 'litro'),
        allowNull: false,
    },
    precioPorUnidad: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
}, {
    sequelize: db_1.default,
    modelName: 'Product',
    tableName: 'products',
    timestamps: true,
});
exports.default = Product;
