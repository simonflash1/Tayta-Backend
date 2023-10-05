import { Request, Response } from "express";
import {
    getAllBusiness,
    getBusinessById,
    getBusinessByName,
    createBusiness,
    deleteBusinessById,
    updateBusinessById
} from "../controllers/businessController"

// MANEJADOR QUE TRAE TODOS LOS NEGOCIOS
export const getAllBusinessHandler = async (req: Request, res: Response): Promise<void> => {
  try {
    const businesses = await getAllBusiness();
    res.status(200).json(businesses);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener todos los negocios" });
  }
}

// MANEJADOR QUE TRAE NEGOCIO POR NOMBRE
export const getBusinessByNameHandler = async (req: Request, res: Response): Promise<void> => {
  const { name } = req.params;
  try {
    const business = await getBusinessByName(name);
    res.status(200).json(business);
  } catch (error) {
    res.status(404).json({ error: "Negocio no encontrado" });
  }
}

// MANEJADOR QUE TRAE NEGOCIO POR ID
export const getBusinessByIdHandler = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const business = await getBusinessById(parseInt(id, 10));
    res.status(200).json(business);
  } catch (error) {
    res.status(404).json({ error: "Negocio no encontrado" });
  }
}

// MANEJADOR QUE CREA UN NEGOCIO
export const createBusinessHandler = async (req: Request, res: Response): Promise<void> => {
  const businessData = req.body;
  try {
    const newBusiness = await createBusiness(businessData);
    res.status(201).json(newBusiness);
  } catch (error) {
    res.status(500).json({ error: "Error al crear el negocio" });
  }
}

// MANEJADOR QUE ACTUALIZA UN NEGOCIO
export const updateBusinessByIdHandler = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const updateBusinessData = req.body;
  try {
    const updatedBusiness = await updateBusinessById(parseInt(id, 10), updateBusinessData);
    res.status(200).json(updatedBusiness);
  } catch (error) {
    res.status(404).json({ error: "Negocio no encontrado" });
  }
}

// MANEJADOR QUE BORRA UN NEGOCIO
export const deleteBusinessByIdHandler = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    await deleteBusinessById(parseInt(id, 10));
    res.status(204).send();
  } catch (error) {
    res.status(404).json({ error: "Negocio no encontrado" });
  }
}
