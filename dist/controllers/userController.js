"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = exports.updateUserById = exports.deleteUser = exports.getUserById = exports.getUserByName = exports.getAllUsers = void 0;
const user_1 = __importDefault(require("../models/user"));
// FUNCION QUE TRAE TODOS LOS USUARIOS
const getAllUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield user_1.default.findAll();
        return users;
    }
    catch (error) {
        throw new Error('Error al obtener todos los usuarios.');
    }
});
exports.getAllUsers = getAllUsers;
// FUNCION QUE TRAE LOS USUARIOS POR NOMBRE
const getUserByName = (name) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield user_1.default.findAll({
            where: {
                nombres: name,
            },
        });
        return users;
    }
    catch (error) {
        throw new Error('Error al obtener usuarios por nombre.');
    }
});
exports.getUserByName = getUserByName;
// FUNCION QUE TRAE UN USUARIO POR ID
const getUserById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_1.default.findByPk(id);
        return user;
    }
    catch (error) {
        throw new Error('Error al obtener usuario por ID.');
    }
});
exports.getUserById = getUserById;
// FUNCION QUE BORRA UN USUARIO POR ID
const deleteUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedUser = yield user_1.default.destroy({
            where: {
                id,
            },
        });
        return deletedUser === 1;
    }
    catch (error) {
        throw new Error('Error al borrar usuario por ID.');
    }
});
exports.deleteUser = deleteUser;
// FUNCION QUE ACTUALIZA UN USUARIO POR ID
const updateUserById = (id, updatedUser) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [affectedRowsCount, updatedUsers] = yield user_1.default.update(updatedUser, {
            where: {
                id,
            },
            returning: true,
        });
        if (affectedRowsCount === 0) {
            return null;
        }
        return updatedUsers[0];
    }
    catch (error) {
        throw new Error('Error al actualizar usuario por ID.');
    }
});
exports.updateUserById = updateUserById;
// FUNCION QUE CREA UN USUARIO
const createUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const createdUser = yield user_1.default.create(user);
        return createdUser;
    }
    catch (error) {
        throw new Error('Error al crear usuario.');
    }
});
exports.createUser = createUser;
