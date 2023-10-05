import { INegocio } from "../utils/types";
import { Model, DataTypes } from 'sequelize';
import sequelize from '../db';


class Negocio extends Model<INegocio> {
    public id!: number;
    public idProductor!: number;
    public nombreNegocio!: string;
    public categoria?: string;
}

Negocio.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        idProductor: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        nombreNegocio: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        categoria: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'Negocio',
        tableName: 'negocios',
        timestamps: true,
    }
);

export default Negocio;