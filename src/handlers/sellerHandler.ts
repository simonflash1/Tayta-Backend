import { Request, Response } from "express";
import { ISeller } from "../utils/types";
import {
  getAllSellers,
  getSellerByName,
  createSeller,
  getSellerById,
  updateSeller,
  deleteSellerById,
} from "../controllers/sellerController";

// MANEJADOR QUE TRAE TODOS LOS VENDEDORES
export const getAllSellersHandler = async (req: Request, res: Response) => {
  try {
    const sellers = await getAllSellers();
    res.json(sellers);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener todos los vendedores." });
  }
};

// MANEJADOR QUE TRAE LOS VENDEDORES POR NOMBRE
export const getSellerByNameHandler = async (req: Request, res: Response) => {
  try {
    const { name } = req.query;
    if (!name || typeof name !== "string") {
      return res.status(400).json({ error: "Nombre inválido." });
    }
    const sellers = await getSellerByName(name);
    res.json(sellers);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener vendedores por nombre." });
  }
};

// MANEJADOR QUE TRAE UN VENDEDOR POR ID
export const getSellerIdHandler = async (req: Request, res: Response) => {
  try {
    const sellerId = parseInt(req.params.id, 10);
    if (!sellerId) {
      return res.status(400).json({ error: "ID de vendedor inválido." });
    }
    const seller = await getSellerById(sellerId);
    if (!seller) {
      return res.status(404).json({ error: "Vendedor no encontrado." });
    }
    res.json(seller);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener vendedor por ID." });
  }
};

// MANEJADOR QUE ACTUALIZA UN VENDEDOR POR ID
export const updateSellerHandler = async (req: Request, res: Response) => {
  try {
    const sellerId = parseInt(req.params.id, 10);
    const updatedSeller: ISeller = req.body;

    if (!sellerId || !updatedSeller) {
      return res.status(400).json({ error: "ID de vendedor o datos inválidos." });
    }

    const seller = await updateSeller(sellerId, updatedSeller);

    if (!seller) {
      return res.status(404).json({ error: "Vendedor no encontrado." });
    }

    res.json(seller);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar vendedor por ID." });
  }
};

// MANEJADOR QUE CREA UN VENDEDOR
export const createSellerHandler = async (req: Request, res: Response) => {
  try {
    const newSeller: ISeller = req.body;
    if (!newSeller) {
      return res.status(400).json({ error: "Datos de vendedor inválidos." });
    }
    const createdSeller = await createSeller(newSeller);
    res.status(201).json(createdSeller);
  } catch (error) {
    res.status(500).json({ error: "Error al crear vendedor." });
  }
};

// MANEJADOR QUE BORRA UN VENDEDOR POR ID
export const deleteSellerHandler = async (req: Request, res: Response) => {
  try {
    const sellerId = parseInt(req.params.id, 10);

    if (!sellerId) {
      return res.status(400).json({ error: "ID de vendedor inválido." });
    }

    const isDeleted = await deleteSellerById(sellerId);

    if (!isDeleted) {
      return res.status(404).json({ error: "Vendedor no encontrado." });
    }

    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: "Error al borrar vendedor." });
  }
};
