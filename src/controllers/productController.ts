import Product from "../models/product";
import { IProduct } from "../utils/types";

// FUNCION QUE TRAE TODOS LOS PRODUCTOS
export const getAllProducts = async () => {
  try {
    const products = await Product.findAll();
    return products;
  } catch (error) {
    throw new Error('Error al obtener todos los productos: ' + (error as Error).message);
  }
}

// FUNCION QUE TRAE PRODUCTOS POR NOMBRE
export const getProductsByName = async (name: string) => {
  try {
    const products = await Product.findAll({
      where: {
        nombre: name
      }
    });
    return products;
  } catch (error) {
    throw new Error('Error al obtener productos por nombre: ' + (error as Error).message);
  }
}

// FUNCION QUE TRAE UN PRODUCTO POR ID
export const getProductById = async (id: number) => {
  try {
    const product = await Product.findByPk(id);
    if (!product) {
      throw new Error('Producto no encontrado');
    }
    return product;
  } catch (error) {
    throw new Error('Error al obtener producto por ID: ' + (error as Error).message);
  }
}

// FUNCION QUE BORRA UN PRODUCTO POR ID
export const deleteProductById = async (id: number) => {
  try {
    const deletedProduct = await Product.destroy({
      where: {
        id: id
      }
    });
    if (deletedProduct === 0) {
      throw new Error('Producto no encontrado para borrar');
    }
    return deletedProduct;
  } catch (error) {
    throw new Error('Error al borrar producto por ID: ' + (error as Error).message);
  }
}

// FUNCION QUE ACTUALIZA UN PRODUCTO POR ID
export const updateProductById = async (id: number, updatedProduct: IProduct) => {
  try {
    const [updatedRowCount, updatedProductData] = await Product.update(updatedProduct, {
      where: {
        id: id
      },
      returning: true // Esto devuelve el producto actualizado
    });

    if (updatedRowCount === 0) {
      throw new Error('Producto no encontrado para actualizar');
    }

    return updatedProductData[0];
  } catch (error) {
    throw new Error('Error al actualizar producto por ID: ' + (error as Error).message);
  }
}

// FUNCION QUE CREA UN PRODUCTO
export const createProduct = async (product: IProduct) => {
  try {
    const createdProduct = await Product.create(product);
    return createdProduct;
  } catch (error) {
    throw new Error('Error al crear producto: ' + (error as Error).message);
  }
}
