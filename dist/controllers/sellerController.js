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
exports.createSeller = exports.updateSeller = exports.deleteSellerById = exports.getSellerById = exports.getSellerByName = exports.getAllSellers = void 0;
const seller_1 = __importDefault(require("../models/seller"));
// FUNCION QUE TRAE TODOS LOS VENDEDORES
const getAllSellers = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const sellers = yield seller_1.default.findAll();
        return sellers;
    }
    catch (error) {
        throw new Error('Error al obtener todos los vendedores.');
    }
});
exports.getAllSellers = getAllSellers;
// FUNCION QUE TRAE LOS VENDEDORES POR NOMBRE
const getSellerByName = (name) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const sellers = yield seller_1.default.findAll({
            where: {
                nombre: name,
            },
        });
        return sellers;
    }
    catch (error) {
        throw new Error('Error al obtener vendedores por nombre.');
    }
});
exports.getSellerByName = getSellerByName;
// FUNCION QUE TRAE UN VENDEDOR POR ID
const getSellerById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const seller = yield seller_1.default.findByPk(id);
        return seller;
    }
    catch (error) {
        throw new Error('Error al obtener vendedor por ID.');
    }
});
exports.getSellerById = getSellerById;
// FUNCION QUE BORRA UN VENDEDOR POR ID
const deleteSellerById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedSeller = yield seller_1.default.destroy({
            where: {
                id,
            },
        });
        return deletedSeller === 1;
    }
    catch (error) {
        throw new Error('Error al borrar vendedor por ID.');
    }
});
exports.deleteSellerById = deleteSellerById;
// FUNCION QUE ACTUALIZA UN VENDEDOR POR ID
const updateSeller = (id, updatedSeller) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [affectedRowsCount, updatedSellers] = yield seller_1.default.update(updatedSeller, {
            where: {
                id,
            },
            returning: true,
        });
        if (affectedRowsCount === 0) {
            return null;
        }
        return updatedSellers[0];
    }
    catch (error) {
        throw new Error('Error al actualizar vendedor por ID.');
    }
});
exports.updateSeller = updateSeller;
// FUNCION QUE CREA UN VENDEDOR
const createSeller = (seller) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const createdSeller = yield seller_1.default.create(seller);
        return createdSeller;
    }
    catch (error) {
        throw new Error('Error al crear vendedor.');
    }
});
exports.createSeller = createSeller;
