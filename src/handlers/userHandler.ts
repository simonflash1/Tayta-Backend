import { Request, Response } from "express";
import { IUser } from "../utils/types";
import {
  getAllUsers,
  getUserByName,
  getUserById,
  createUser,
  deleteUser,
  updateUserById,
} from "../controllers/userController";

// MANEJADOR QUE TRAE TODOS LOS USUARIOS
export const getAllUsersHandler = async (req: Request, res: Response) => {
  try {
    const users = await getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener todos los usuarios." });
  }
};

// MANEJADOR QUE TRAE USUARIOS POR NOMBRE
export const getUsersHandler = async (req: Request, res: Response) => {
  try {
    const { name } = req.query;
    if (!name || typeof name !== "string") {
      return res.status(400).json({ error: "Nombre inválido." });
    }
    const users = await getUserByName(name);
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener usuarios por nombre." });
  }
};

// MANEJADOR QUE TRAE UN USUARIO POR ID
export const getUserIdHandler = async (req: Request, res: Response) => {
  try {
    const userId = parseInt(req.params.id, 10);
    if (!userId) {
      return res.status(400).json({ error: "ID de usuario inválido." });
    }
    const user = await getUserById(userId);
    if (!user) {
      return res.status(404).json({ error: "Usuario no encontrado." });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener usuario por ID." });
  }
};

// MANEJADOR QUE ACTUALIZA UN USUARIO POR ID
export const updateUserHandler = async (req: Request, res: Response) => {
  try {
    const userId = parseInt(req.params.id, 10);
    const updatedUser: IUser = req.body;

    if (!userId || !updatedUser) {
      return res.status(400).json({ error: "ID de usuario o datos inválidos." });
    }

    const user = await updateUserById(userId, updatedUser);

    if (!user) {
      return res.status(404).json({ error: "Usuario no encontrado." });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar usuario por ID." });
  }
};

// MANEJADOR QUE CREA UN USUARIO
export const createUserHandler = async (req: Request, res: Response) => {
  try {
    const newUser: IUser = req.body;
    if (!newUser) {
      return res.status(400).json({ error: "Datos de usuario inválidos." });
    }
    const createdUser = await createUser(newUser);
    res.status(201).json(createdUser);
  } catch (error) {
    res.status(500).json({ error: "Error al crear usuario." });
  }
};

// MANEJADOR QUE BORRA UN USUARIO
export const deleteUserHandler = async (req: Request, res: Response) => {
  try {
    const userId = parseInt(req.params.id, 10);

    if (!userId) {
      return res.status(400).json({ error: "ID de usuario inválido." });
    }

    const isDeleted = await deleteUser(userId);

    if (!isDeleted) {
      return res.status(404).json({ error: "Usuario no encontrado." });
    }

    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: "Error al borrar usuario." });
  }
};
