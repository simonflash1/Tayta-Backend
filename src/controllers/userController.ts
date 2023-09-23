import User from "../models/user";
import { IUser } from "../utils/types";

// FUNCION QUE TRAE TODOS LOS USUARIOS
export const getAllUsers = async (): Promise<IUser[]> => {
  try {
    const users = await User.findAll();
    return users;
  } catch (error) {
    throw new Error('Error al obtener todos los usuarios.');
  }
}

// FUNCION QUE TRAE LOS USUARIOS POR NOMBRE
export const getUserByName = async (name: string): Promise<IUser[]> => {
  try {
    const users = await User.findAll({
      where: {
        nombres: name,
      },
    });
    return users;
  } catch (error) {
    throw new Error('Error al obtener usuarios por nombre.');
  }
}

// FUNCION QUE TRAE UN USUARIO POR ID
export const getUserById = async (id: number): Promise<IUser | null> => {
  try {
    const user = await User.findByPk(id);
    return user;
  } catch (error) {
    throw new Error('Error al obtener usuario por ID.');
  }
}

// FUNCION QUE BORRA UN USUARIO POR ID
export const deleteUser = async (id: number): Promise<boolean> => {
  try {
    const deletedUser = await User.destroy({
      where: {
        id,
      },
    });
    return deletedUser === 1;
  } catch (error) {
    throw new Error('Error al borrar usuario por ID.');
  }
}

// FUNCION QUE ACTUALIZA UN USUARIO POR ID
export const updateUserById = async (id: number, updatedUser: IUser): Promise<IUser | null> => {
  try {
    const [affectedRowsCount, updatedUsers] = await User.update(updatedUser, {
      where: {
        id,
      },
      returning: true,
    });

    if (affectedRowsCount === 0) {
      return null;
    }

    return updatedUsers[0];
  } catch (error) {
    throw new Error('Error al actualizar usuario por ID.');
  }
}

// FUNCION QUE CREA UN USUARIO
export const createUser = async (user: IUser): Promise<IUser> => {
  try {
    const createdUser = await User.create(user);
    return createdUser;
  } catch (error) {
    throw new Error('Error al crear usuario.');
  }
}
