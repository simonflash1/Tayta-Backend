import { Request, Response } from "express";
import {
  getAllProducts,
  getProductsByName,
  getProductById,
  updateProductById,
  createProduct,
  deleteProductById
} from "../controllers/productController";
import { IProduct } from "../utils/types";
//import Product from "../models/product";

// MANEJADOR QUE TRAE TODOS LOS PRODUCTOS
export const getAllProductsHandler = async (req: Request, res: Response): Promise<void> => {
  try {
    const products = await getAllProducts();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener todos los productos.' });
  }
}

// MANEJADOR QUE TRAE PRODUCTOS POR NOMBRE
export const getProductsNameHandler = async (req: Request, res: Response): Promise<void> => {
  const name = req.query.name as string | undefined;
  try {
    if (!name) {
      res.status(400).json({ error: 'El parámetro "name" es requerido.' });
      return;
    }
    
    const products = await getProductsByName(name);
    res.status(200).json(products);
  } catch (error) {
    console.error('Error al obtener productos por nombre:', error);
    res.status(500).json({ error: 'Error al obtener productos por nombre.' });
  }
}

// MANEJADOR QUE TRAE UN PRODUCTO POR ID
export const getProductIdHandler = async (req: Request, res: Response): Promise<void> => {
  const id = parseInt(req.params.id);
  try {
    const product = await getProductById(id);
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ error: 'Producto no encontrado.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener producto por ID.' });
  }
}

// MANEJADOR QUE ACTUALIZA UN PRODUCTO POR ID
export const updateProductHandler = async (req: Request, res: Response): Promise<void> => {
  const id = parseInt(req.params.id);
  const updatedProduct = req.body as IProduct;
  try {
    const product = await updateProductById(id, updatedProduct);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar producto por ID.' });
  }
}

// MANEJADOR QUE CREA UN PRODUCTO
export const createProductHandler = async (req: Request, res: Response): Promise<void> => {
  const newProduct = req.body as IProduct;
  try {
    const createdProduct = await createProduct(newProduct);
    res.status(201).json(createdProduct);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear producto.' });
  }
}

// MANEJADOR QUE BORRA UN PRODUCTO
export const deleteProductHandler = async (req: Request, res: Response): Promise<void> => {
  const id = parseInt(req.params.id);
  try {
    const deletedProduct = await deleteProductById(id);
    if (deletedProduct) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Producto no encontrado para borrar.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al borrar producto por ID.' });
  }
}
