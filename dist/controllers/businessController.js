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
exports.deleteBusinessById = exports.updateBusinessById = exports.createBusiness = exports.getBusinessById = exports.getBusinessByName = exports.getAllBusiness = void 0;
const business_1 = __importDefault(require("../models/business"));
// FUNCION QUE TRAE TODOS LOS NEGOCIOS
const getAllBusiness = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const businesses = yield business_1.default.findAll();
        return businesses;
    }
    catch (error) {
        throw new Error("Error al obtener todos los negocios");
    }
});
exports.getAllBusiness = getAllBusiness;
// FUNCION QUE TRAE NEGOCIO POR NOMBRE 
const getBusinessByName = (name) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const business = yield business_1.default.findOne({ where: { nombreNegocio: name } });
        if (!business) {
            throw new Error("Negocio no encontrado");
        }
        return business;
    }
    catch (error) {
        throw new Error("Error al obtener el negocio por nombre");
    }
});
exports.getBusinessByName = getBusinessByName;
// FUNCION QUE TRAE UN NEGOCIO POR ID 
const getBusinessById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const business = yield business_1.default.findByPk(id);
        if (!business) {
            throw new Error("Negocio no encontrado");
        }
        return business;
    }
    catch (error) {
        throw new Error("Error al obtener el negocio por ID");
    }
});
exports.getBusinessById = getBusinessById;
// FUNCION QUE CREA UN NEGOCIO
const createBusiness = (businessData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newBusiness = yield business_1.default.create(businessData);
        return newBusiness;
    }
    catch (error) {
        throw new Error("Error al crear el negocio");
    }
});
exports.createBusiness = createBusiness;
// FUNCION QUE ACTUALIZA UN NEGOCIO POR ID 
const updateBusinessById = (id, updateBusiness) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const business = yield business_1.default.findByPk(id);
        if (!business) {
            throw new Error("Negocio no encontrado");
        }
        // Actualizar los campos del negocio
        yield business.update(updateBusiness);
        return business;
    }
    catch (error) {
        throw new Error("Error al actualizar el negocio");
    }
});
exports.updateBusinessById = updateBusinessById;
// FUNCION QUE BORRA UN NEGOCIO POR ID 
const deleteBusinessById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const business = yield business_1.default.findByPk(id);
        if (!business) {
            throw new Error("Negocio no encontrado");
        }
        // Borrar el negocio
        yield business.destroy();
        return "Negocio eliminado con éxito";
    }
    catch (error) {
        throw new Error("Error al eliminar el negocio");
    }
});
exports.deleteBusinessById = deleteBusinessById;
