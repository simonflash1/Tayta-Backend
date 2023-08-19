import Seller from "../models/seller";
import { ISeller } from "../utils/types";

// FUNCION QUE TRAE TODOS LOS VENDEDORES
export const getAllSellers = async (): Promise<ISeller[]> => {
  try {
    const sellers = await Seller.findAll();
    return sellers;
  } catch (error) {
    throw new Error('Error al obtener todos los vendedores.');
  }
}

// FUNCION QUE TRAE LOS VENDEDORES POR NOMBRE
export const getSellerByName = async (name: string): Promise<ISeller[]> => {
  try {
    const sellers = await Seller.findAll({
      where: {
        nombre: name,
      },
    });
    return sellers;
  } catch (error) {
    throw new Error('Error al obtener vendedores por nombre.');
  }
}

// FUNCION QUE TRAE UN VENDEDOR POR ID
export const getSellerById = async (id: number): Promise<ISeller | null> => {
  try {
    const seller = await Seller.findByPk(id);
    return seller;
  } catch (error) {
    throw new Error('Error al obtener vendedor por ID.');
  }
}

// FUNCION QUE BORRA UN VENDEDOR POR ID
export const deleteSellerById = async (id: number): Promise<boolean> => {
  try {
    const deletedSeller = await Seller.destroy({
      where: {
        id,
      },
    });
    return deletedSeller === 1;
  } catch (error) {
    throw new Error('Error al borrar vendedor por ID.');
  }
}

// FUNCION QUE ACTUALIZA UN VENDEDOR POR ID
export const updateSeller = async (id: number, updatedSeller: ISeller): Promise<ISeller | null> => {
  try {
    const [affectedRowsCount, updatedSellers] = await Seller.update(updatedSeller, {
      where: {
        id,
      },
      returning: true,
    });

    if (affectedRowsCount === 0) {
      return null;
    }

    return updatedSellers[0];
  } catch (error) {
    throw new Error('Error al actualizar vendedor por ID.');
  }
}

// FUNCION QUE CREA UN VENDEDOR
export const createSeller = async (seller: ISeller): Promise<ISeller> => {
  try {
    const createdSeller = await Seller.create(seller);
    return createdSeller;
  } catch (error) {
    throw new Error('Error al crear vendedor.');
  }
}
