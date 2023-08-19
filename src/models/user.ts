import { Model, DataTypes } from 'sequelize';
import sequelize from '../db';
import { IUser } from '../utils/types';

class User extends Model<IUser> implements IUser {
    public id!: number;
    public rol!: 'admin' | 'municipalidad';
    public username!: string;
    public password!: string;
    public nombreMunicipio!: string;
    public departamento!: string;
    public provincia!: string;
    public distrito!: string;

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
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        nombreMunicipio: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        departamento: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        provincia: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        distrito: {
            type: DataTypes.STRING,
            allowNull: false,
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
