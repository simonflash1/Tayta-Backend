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
exports.deleteSellerHandler = exports.createSellerHandler = exports.updateSellerHandler = exports.getSellerIdHandler = exports.getSellerByNameHandler = exports.getAllSellersHandler = void 0;
const sellerController_1 = require("../controllers/sellerController");
// MANEJADOR QUE TRAE TODOS LOS VENDEDORES
const getAllSellersHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const sellers = yield (0, sellerController_1.getAllSellers)();
        res.json(sellers);
    }
    catch (error) {
        res.status(500).json({ error: "Error al obtener todos los vendedores." });
    }
});
exports.getAllSellersHandler = getAllSellersHandler;
// MANEJADOR QUE TRAE LOS VENDEDORES POR NOMBRE
const getSellerByNameHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name } = req.query;
        if (!name || typeof name !== "string") {
            return res.status(400).json({ error: "Nombre inválido." });
        }
        const sellers = yield (0, sellerController_1.getSellerByName)(name);
        res.json(sellers);
    }
    catch (error) {
        res.status(500).json({ error: "Error al obtener vendedores por nombre." });
    }
});
exports.getSellerByNameHandler = getSellerByNameHandler;
// MANEJADOR QUE TRAE UN VENDEDOR POR ID
const getSellerIdHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const sellerId = parseInt(req.params.id, 10);
        if (!sellerId) {
            return res.status(400).json({ error: "ID de vendedor inválido." });
        }
        const seller = yield (0, sellerController_1.getSellerById)(sellerId);
        if (!seller) {
            return res.status(404).json({ error: "Vendedor no encontrado." });
        }
        res.json(seller);
    }
    catch (error) {
        res.status(500).json({ error: "Error al obtener vendedor por ID." });
    }
});
exports.getSellerIdHandler = getSellerIdHandler;
// MANEJADOR QUE ACTUALIZA UN VENDEDOR POR ID
const updateSellerHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const sellerId = parseInt(req.params.id, 10);
        const updatedSeller = req.body;
        if (!sellerId || !updatedSeller) {
            return res.status(400).json({ error: "ID de vendedor o datos inválidos." });
        }
        const seller = yield (0, sellerController_1.updateSeller)(sellerId, updatedSeller);
        if (!seller) {
            return res.status(404).json({ error: "Vendedor no encontrado." });
        }
        res.json(seller);
    }
    catch (error) {
        res.status(500).json({ error: "Error al actualizar vendedor por ID." });
    }
});
exports.updateSellerHandler = updateSellerHandler;
// MANEJADOR QUE CREA UN VENDEDOR
const createSellerHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newSeller = req.body;
        if (!newSeller) {
            return res.status(400).json({ error: "Datos de vendedor inválidos." });
        }
        const createdSeller = yield (0, sellerController_1.createSeller)(newSeller);
        res.status(201).json(createdSeller);
    }
    catch (error) {
        res.status(500).json({ error: "Error al crear vendedor." });
    }
});
exports.createSellerHandler = createSellerHandler;
// MANEJADOR QUE BORRA UN VENDEDOR POR ID
const deleteSellerHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const sellerId = parseInt(req.params.id, 10);
        if (!sellerId) {
            return res.status(400).json({ error: "ID de vendedor inválido." });
        }
        const isDeleted = yield (0, sellerController_1.deleteSellerById)(sellerId);
        if (!isDeleted) {
            return res.status(404).json({ error: "Vendedor no encontrado." });
        }
        res.status(204).end();
    }
    catch (error) {
        res.status(500).json({ error: "Error al borrar vendedor." });
    }
});
exports.deleteSellerHandler = deleteSellerHandler;
