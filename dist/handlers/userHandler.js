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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserHandler = exports.createUserHandler = exports.updateUserHandler = exports.getUserIdHandler = exports.getUsersHandler = exports.getAllUsersHandler = void 0;
const userController_1 = require("../controllers/userController");
// MANEJADOR QUE TRAE TODOS LOS USUARIOS
const getAllUsersHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield (0, userController_1.getAllUsers)();
        res.json(users);
    }
    catch (error) {
        res.status(500).json({ error: "Error al obtener todos los usuarios." });
    }
});
exports.getAllUsersHandler = getAllUsersHandler;
// MANEJADOR QUE TRAE USUARIOS POR NOMBRE
const getUsersHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name } = req.query;
        if (!name || typeof name !== "string") {
            return res.status(400).json({ error: "Nombre inválido." });
        }
        const users = yield (0, userController_1.getUserByName)(name);
        res.json(users);
    }
    catch (error) {
        res.status(500).json({ error: "Error al obtener usuarios por nombre." });
    }
});
exports.getUsersHandler = getUsersHandler;
// MANEJADOR QUE TRAE UN USUARIO POR ID
const getUserIdHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = parseInt(req.params.id, 10);
        if (!userId) {
            return res.status(400).json({ error: "ID de usuario inválido." });
        }
        const user = yield (0, userController_1.getUserById)(userId);
        if (!user) {
            return res.status(404).json({ error: "Usuario no encontrado." });
        }
        res.json(user);
    }
    catch (error) {
        res.status(500).json({ error: "Error al obtener usuario por ID." });
    }
});
exports.getUserIdHandler = getUserIdHandler;
// MANEJADOR QUE ACTUALIZA UN USUARIO POR ID
const updateUserHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = parseInt(req.params.id, 10);
        const updatedUser = req.body;
        if (!userId || !updatedUser) {
            return res.status(400).json({ error: "ID de usuario o datos inválidos." });
        }
        const user = yield (0, userController_1.updateUserById)(userId, updatedUser);
        if (!user) {
            return res.status(404).json({ error: "Usuario no encontrado." });
        }
        res.json(user);
    }
    catch (error) {
        res.status(500).json({ error: "Error al actualizar usuario por ID." });
    }
});
exports.updateUserHandler = updateUserHandler;
// MANEJADOR QUE CREA UN USUARIO
const createUserHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newUser = req.body;
        if (!newUser) {
            return res.status(400).json({ error: "Datos de usuario inválidos." });
        }
        const createdUser = yield (0, userController_1.createUser)(newUser);
        res.status(201).json(createdUser);
    }
    catch (error) {
        res.status(500).json({ error: "Error al crear usuario." });
    }
});
exports.createUserHandler = createUserHandler;
// MANEJADOR QUE BORRA UN USUARIO
const deleteUserHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = parseInt(req.params.id, 10);
        if (!userId) {
            return res.status(400).json({ error: "ID de usuario inválido." });
        }
        const isDeleted = yield (0, userController_1.deleteUser)(userId);
        if (!isDeleted) {
            return res.status(404).json({ error: "Usuario no encontrado." });
        }
        res.status(204).end();
    }
    catch (error) {
        res.status(500).json({ error: "Error al borrar usuario." });
    }
});
exports.deleteUserHandler = deleteUserHandler;
