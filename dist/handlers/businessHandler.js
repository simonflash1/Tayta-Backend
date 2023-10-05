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
exports.deleteBusinessByIdHandler = exports.updateBusinessByIdHandler = exports.createBusinessHandler = exports.getBusinessByIdHandler = exports.getBusinessByNameHandler = exports.getAllBusinessHandler = void 0;
const businessController_1 = require("../controllers/businessController");
// MANEJADOR QUE TRAE TODOS LOS NEGOCIOS
const getAllBusinessHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const businesses = yield (0, businessController_1.getAllBusiness)();
        res.status(200).json(businesses);
    }
    catch (error) {
        res.status(500).json({ error: "Error al obtener todos los negocios" });
    }
});
exports.getAllBusinessHandler = getAllBusinessHandler;
// MANEJADOR QUE TRAE NEGOCIO POR NOMBRE
const getBusinessByNameHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name } = req.params;
    try {
        const business = yield (0, businessController_1.getBusinessByName)(name);
        res.status(200).json(business);
    }
    catch (error) {
        res.status(404).json({ error: "Negocio no encontrado" });
    }
});
exports.getBusinessByNameHandler = getBusinessByNameHandler;
// MANEJADOR QUE TRAE NEGOCIO POR ID
const getBusinessByIdHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const business = yield (0, businessController_1.getBusinessById)(parseInt(id, 10));
        res.status(200).json(business);
    }
    catch (error) {
        res.status(404).json({ error: "Negocio no encontrado" });
    }
});
exports.getBusinessByIdHandler = getBusinessByIdHandler;
// MANEJADOR QUE CREA UN NEGOCIO
const createBusinessHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const businessData = req.body;
    try {
        const newBusiness = yield (0, businessController_1.createBusiness)(businessData);
        res.status(201).json(newBusiness);
    }
    catch (error) {
        res.status(500).json({ error: "Error al crear el negocio" });
    }
});
exports.createBusinessHandler = createBusinessHandler;
// MANEJADOR QUE ACTUALIZA UN NEGOCIO
const updateBusinessByIdHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const updateBusinessData = req.body;
    try {
        const updatedBusiness = yield (0, businessController_1.updateBusinessById)(parseInt(id, 10), updateBusinessData);
        res.status(200).json(updatedBusiness);
    }
    catch (error) {
        res.status(404).json({ error: "Negocio no encontrado" });
    }
});
exports.updateBusinessByIdHandler = updateBusinessByIdHandler;
// MANEJADOR QUE BORRA UN NEGOCIO
const deleteBusinessByIdHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        yield (0, businessController_1.deleteBusinessById)(parseInt(id, 10));
        res.status(204).send();
    }
    catch (error) {
        res.status(404).json({ error: "Negocio no encontrado" });
    }
});
exports.deleteBusinessByIdHandler = deleteBusinessByIdHandler;
