import { Router } from "express";
import productRouter from "./productRouter";
import userRouter from "./userRouter";
import sellerRouter from "./sellerRouter";

const router = Router();

router.use("/products", productRouter);
router.use("/users", userRouter);
router.use("/seller", sellerRouter);

export default router;