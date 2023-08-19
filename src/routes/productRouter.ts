import { Router, Request, Response } from "express";
import {
    getAllProductsHandler,
    getProductsNameHandler,
    getProductIdHandler,
    updateProductHandler,
    createProductHandler,
    deleteProductHandler
} from "../handlers/productHandler"

const productRouter = Router()

interface IProductsHandler {
    (req: Request, res: Response): void;
}

productRouter.get("/", getProductsNameHandler as IProductsHandler)

productRouter.get("/all", getAllProductsHandler as IProductsHandler)

productRouter.get("/:id", getProductIdHandler as IProductsHandler)

productRouter.put("/:id", updateProductHandler as IProductsHandler)

productRouter.post("/", createProductHandler as IProductsHandler)

productRouter.delete("/:id", deleteProductHandler as IProductsHandler)

export default productRouter;