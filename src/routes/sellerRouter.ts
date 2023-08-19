import { Router, Request, Response } from "express";
import {
getAllSellersHandler,
getSellerByNameHandler,
getSellerIdHandler,
deleteSellerHandler,
createSellerHandler,
updateSellerHandler
} from "../handlers/sellerHandler"

const sellerRouter = Router()

interface ISellerHandler {
    (req: Request, res: Response): void;
}
sellerRouter.get("/", getSellerByNameHandler as ISellerHandler)

sellerRouter.get("/all", getAllSellersHandler as ISellerHandler)

sellerRouter.get("/:id", getSellerIdHandler as ISellerHandler)

sellerRouter.put("/:id", updateSellerHandler as ISellerHandler)

sellerRouter.post("/", createSellerHandler as ISellerHandler)

sellerRouter.delete("/:id", deleteSellerHandler as ISellerHandler)


export default sellerRouter;