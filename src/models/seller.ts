import { Model, DataTypes } from 'sequelize';
import sequelize from '../db';
import { ISeller } from '../utils/types';

class Seller extends Model<ISeller> implements ISeller {
  public id!: number;
  public nombre!: string;
  public apellidoPaterno!: string;
  public apellidoMaterno?: string;
  public dni!: string;
  public domicilio!: string;
  public telefono!: string;
  public municipioId!: number;
}

Seller.init(
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
    apellidoPaterno: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    apellidoMaterno: {
      type: DataTypes.STRING,
    },
    dni: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    domicilio: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    telefono: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    municipioId: {
      type: DataTypes.INTEGER,
      allowNull: false,
//      references: {
//        model: 'Municipio',
//        key: 'id',
//      },
    },
  },
  {
    sequelize,
    modelName: 'Seller',
    tableName: 'sellers',
    timestamps: true,
  }
);

export default Seller;
