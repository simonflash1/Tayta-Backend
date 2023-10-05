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
exports.deleteProductHandler = exports.createProductHandler = exports.updateProductHandler = exports.getProductIdHandler = exports.getProductsNameHandler = exports.getAllProductsHandler = void 0;
const productController_1 = require("../controllers/productController");
//import Product from "../models/product";
// MANEJADOR QUE TRAE TODOS LOS PRODUCTOS
const getAllProductsHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield (0, productController_1.getAllProducts)();
        res.status(200).json(products);
    }
    catch (error) {
        res.status(500).json({ error: 'Error al obtener todos los productos.' });
    }
});
exports.getAllProductsHandler = getAllProductsHandler;
// MANEJADOR QUE TRAE PRODUCTOS POR NOMBRE
const getProductsNameHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const name = req.query.name;
    try {
        if (!name) {
            res.status(400).json({ error: 'El parámetro "name" es requerido.' });
            return;
        }
        const products = yield (0, productController_1.getProductsByName)(name);
        res.status(200).json(products);
    }
    catch (error) {
        console.error('Error al obtener productos por nombre:', error);
        res.status(500).json({ error: 'Error al obtener productos por nombre.' });
    }
});
exports.getProductsNameHandler = getProductsNameHandler;
// MANEJADOR QUE TRAE UN PRODUCTO POR ID
const getProductIdHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    try {
        const product = yield (0, productController_1.getProductById)(id);
        if (product) {
            res.status(200).json(product);
        }
        else {
            res.status(404).json({ error: 'Producto no encontrado.' });
        }
    }
    catch (error) {
        res.status(500).json({ error: 'Error al obtener producto por ID.' });
    }
});
exports.getProductIdHandler = getProductIdHandler;
// MANEJADOR QUE ACTUALIZA UN PRODUCTO POR ID
const updateProductHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const updatedProduct = req.body;
    try {
        const product = yield (0, productController_1.updateProductById)(id, updatedProduct);
        res.status(200).json(product);
    }
    catch (error) {
        res.status(500).json({ error: 'Error al actualizar producto por ID.' });
    }
});
exports.updateProductHandler = updateProductHandler;
// MANEJADOR QUE CREA UN PRODUCTO
const createProductHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newProduct = req.body;
    try {
        const createdProduct = yield (0, productController_1.createProduct)(newProduct);
        res.status(201).json(createdProduct);
    }
    catch (error) {
        res.status(500).json({ error: 'Error al crear producto.' });
    }
});
exports.createProductHandler = createProductHandler;
// MANEJADOR QUE BORRA UN PRODUCTO
const deleteProductHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    try {
        const deletedProduct = yield (0, productController_1.deleteProductById)(id);
        if (deletedProduct) {
            res.status(204).send();
        }
        else {
            res.status(404).json({ error: 'Producto no encontrado para borrar.' });
        }
    }
    catch (error) {
        res.status(500).json({ error: 'Error al borrar producto por ID.' });
    }
});
exports.deleteProductHandler = deleteProductHandler;
