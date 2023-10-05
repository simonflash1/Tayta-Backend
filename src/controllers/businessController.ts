import Negocio from "../models/business";
import { INegocio } from "../utils/types";

// FUNCION QUE TRAE TODOS LOS NEGOCIOS
export const getAllBusiness = async () => {
  try {
    const businesses = await Negocio.findAll();
    return businesses;
  } catch (error) {
    throw new Error("Error al obtener todos los negocios");
  }
}

// FUNCION QUE TRAE NEGOCIO POR NOMBRE 
export const getBusinessByName = async (name: string) => {
  try {
    const business = await Negocio.findOne({ where: { nombreNegocio: name } });
    if (!business) {
      throw new Error("Negocio no encontrado");
    }
    return business;
  } catch (error) {
    throw new Error("Error al obtener el negocio por nombre");
  }
}

// FUNCION QUE TRAE UN NEGOCIO POR ID 
export const getBusinessById = async (id: number) => {
  try {
    const business = await Negocio.findByPk(id);
    if (!business) {
      throw new Error("Negocio no encontrado");
    }
    return business;
  } catch (error) {
    throw new Error("Error al obtener el negocio por ID");
  }
}

// FUNCION QUE CREA UN NEGOCIO
export const createBusiness = async (businessData: INegocio) => {
  try {
    const newBusiness = await Negocio.create(businessData);
    return newBusiness;
  } catch (error) {
    throw new Error("Error al crear el negocio");
  }
}

// FUNCION QUE ACTUALIZA UN NEGOCIO POR ID 
export const updateBusinessById = async (id: number, updateBusiness: INegocio) => {
  try {
    const business = await Negocio.findByPk(id);
    if (!business) {
      throw new Error("Negocio no encontrado");
    }

    // Actualizar los campos del negocio
    await business.update(updateBusiness);

    return business;
  } catch (error) {
    throw new Error("Error al actualizar el negocio");
  }
}

// FUNCION QUE BORRA UN NEGOCIO POR ID 
export const deleteBusinessById = async (id: number) => {
  try {
    const business = await Negocio.findByPk(id);
    if (!business) {
      throw new Error("Negocio no encontrado");
    }

    // Borrar el negocio
    await business.destroy();

    return "Negocio eliminado con éxito";
  } catch (error) {
    throw new Error("Error al eliminar el negocio");
  }
}
