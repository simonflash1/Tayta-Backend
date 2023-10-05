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
exports.createProduct = exports.updateProductById = exports.deleteProductById = exports.getProductById = exports.getProductsByName = exports.getAllProducts = void 0;
const product_1 = __importDefault(require("../models/product"));
// FUNCION QUE TRAE TODOS LOS PRODUCTOS
const getAllProducts = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield product_1.default.findAll();
        return products;
    }
    catch (error) {
        throw new Error('Error al obtener todos los productos: ' + error.message);
    }
});
exports.getAllProducts = getAllProducts;
// FUNCION QUE TRAE PRODUCTOS POR NOMBRE
const getProductsByName = (name) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield product_1.default.findAll({
            where: {
                nombre: name
            }
        });
        return products;
    }
    catch (error) {
        throw new Error('Error al obtener productos por nombre: ' + error.message);
    }
});
exports.getProductsByName = getProductsByName;
// FUNCION QUE TRAE UN PRODUCTO POR ID
const getProductById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield product_1.default.findByPk(id);
        if (!product) {
            throw new Error('Producto no encontrado');
        }
        return product;
    }
    catch (error) {
        throw new Error('Error al obtener producto por ID: ' + error.message);
    }
});
exports.getProductById = getProductById;
// FUNCION QUE BORRA UN PRODUCTO POR ID
const deleteProductById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedProduct = yield product_1.default.destroy({
            where: {
                id: id
            }
        });
        if (deletedProduct === 0) {
            throw new Error('Producto no encontrado para borrar');
        }
        return deletedProduct;
    }
    catch (error) {
        throw new Error('Error al borrar producto por ID: ' + error.message);
    }
});
exports.deleteProductById = deleteProductById;
// FUNCION QUE ACTUALIZA UN PRODUCTO POR ID
const updateProductById = (id, updatedProduct) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [updatedRowCount, updatedProductData] = yield product_1.default.update(updatedProduct, {
            where: {
                id: id
            },
            returning: true // Esto devuelve el producto actualizado
        });
        if (updatedRowCount === 0) {
            throw new Error('Producto no encontrado para actualizar');
        }
        return updatedProductData[0];
    }
    catch (error) {
        throw new Error('Error al actualizar producto por ID: ' + error.message);
    }
});
exports.updateProductById = updateProductById;
// FUNCION QUE CREA UN PRODUCTO
const createProduct = (product) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const createdProduct = yield product_1.default.create(product);
        return createdProduct;
    }
    catch (error) {
        throw new Error('Error al crear producto: ' + error.message);
    }
});
exports.createProduct = createProduct;
