"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productRouter_1 = __importDefault(require("./productRouter"));
const userRouter_1 = __importDefault(require("./userRouter"));
const sellerRouter_1 = __importDefault(require("./sellerRouter"));
const businessRouter_1 = __importDefault(require("./businessRouter"));
const router = (0, express_1.Router)();
router.use("/products", productRouter_1.default);
router.use("/users", userRouter_1.default);
router.use("/seller", sellerRouter_1.default);
router.use("/negocio", businessRouter_1.default);
exports.default = router;
/*
    https://tayta-backend-vpoh-dev.fl0.io/products/all
    https://tayta-backend-vpoh-dev.fl0.io/products/:id

    https://tayta-backend-vpoh-dev.fl0.io/users/all
    https://tayta-backend-vpoh-dev.fl0.io/users/:id

    https://tayta-backend-vpoh-dev.fl0.io/seller/all
    https://tayta-backend-vpoh-dev.fl0.io/seller/:id

*/ 
