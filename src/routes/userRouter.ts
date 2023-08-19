import { Router, Request, Response } from "express";
import {
    getAllUsersHandler,
    getUsersHandler,
    getUserIdHandler,
    updateUserHandler,
    createUserHandler,
    deleteUserHandler
} from "../handlers/userHandler"

const userRouter = Router()

interface IUsersHandler {
    (req: Request, res: Response): void;
}

userRouter.get("/", getUsersHandler as IUsersHandler)

userRouter.get("/all", getAllUsersHandler as IUsersHandler)

userRouter.get("/:id", getUserIdHandler as IUsersHandler)

userRouter.put("/:id", updateUserHandler as IUsersHandler)

userRouter.post("/", createUserHandler as IUsersHandler)

userRouter.delete("/:id", deleteUserHandler as IUsersHandler)

export default userRouter;