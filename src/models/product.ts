import { IProduct } from '../utils/types';
import { Model, DataTypes } from 'sequelize';
import sequelize from '../db';

class Product extends Model<IProduct> {
  public id!: number;
  public nombre!: string;
  public categoria!: string;
  public descripcion!: string;
  public imagen!: string;
  public unidadMedida!: string;
  public precioPorUnidad!: number;
}

Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    categoria: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    imagen: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    unidadMedida: {
      type: DataTypes.ENUM('unidad', 'kg', 'litro'),
      allowNull: false,
    },
    precioPorUnidad: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Product',
    tableName: 'products',
    timestamps: true,
  }
);

export default Product;
