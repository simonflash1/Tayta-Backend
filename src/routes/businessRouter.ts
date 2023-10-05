import { Router, Request, Response } from "express";
import {
    getAllBusinessHandler,
    getBusinessByNameHandler,
    getBusinessByIdHandler,
    createBusinessHandler,
    updateBusinessByIdHandler,
    deleteBusinessByIdHandler
} from "../handlers/businessHandler"

const businessRouter = Router()
interface IBusinessHandler {
    (req: Request, res: Response): void;
}

businessRouter.get("/all", getAllBusinessHandler as IBusinessHandler)

businessRouter.get("/", getBusinessByNameHandler as IBusinessHandler)

businessRouter.get("/:id", getBusinessByIdHandler as IBusinessHandler)

businessRouter.put("/:id", updateBusinessByIdHandler as IBusinessHandler)

businessRouter.post("/", createBusinessHandler as IBusinessHandler)

businessRouter.delete("/:id", deleteBusinessByIdHandler as IBusinessHandler)

export default businessRouter;