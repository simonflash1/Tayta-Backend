import { Model, DataTypes } from 'sequelize';
import sequelize from '../db';
import { IUser, rolUsuario } from '../utils/types';

class User extends Model<IUser> implements IUser {
    public id!: number;
    public rol!: rolUsuario;
    public idPais!: number;
    public idDepartamento?: number;
    public idMunicipalidad?: number;
    public email?: string;
    public nombreEntidad?: string;
    public username!: string;
    public password!: string;
    public nombres?: string;
    public apellidoPaterno?: string;
    public apellidoMaterno?: string;
    public dni?: string;
    public domicilio?: string;
    public telefono?: string;

    public verifyPassword(passwordToCheck: string): boolean {
        return this.password === passwordToCheck;
    }
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        rol: {
            type: DataTypes.ENUM('admin', 'municipalidad'),
            allowNull: false,
        },
        idPais: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        idDepartamento: {
            type: DataTypes.INTEGER,
        },
        idMunicipalidad: {
            type: DataTypes.INTEGER,
        },
        email: {
            type: DataTypes.STRING,
        },
        nombreEntidad: {
            type: DataTypes.STRING,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        nombres: {
            type: DataTypes.STRING,
        },
        apellidoPaterno: {
            type: DataTypes.STRING,
        },
        apellidoMaterno: {
            type: DataTypes.STRING,
        },
        dni: {
            type: DataTypes.STRING,
        },
        domicilio: {
            type: DataTypes.STRING,
        },
        telefono: {
            type: DataTypes.STRING,
        },
    },
    {
        sequelize,
        modelName: 'Usuario',
        tableName: 'usuarios',
        timestamps: true,
    }
);

export default User;