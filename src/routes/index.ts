import { Router } from "express";
import productRouter from "./productRouter";
import userRouter from "./userRouter";
import sellerRouter from "./sellerRouter";
import businessRouter from "./businessRouter";

const router = Router();

router.use("/products", productRouter);
router.use("/users", userRouter);
router.use("/seller", sellerRouter);
router.use("/negocio", businessRouter);

export default router;


/*  
    https://tayta-backend-vpoh-dev.fl0.io/products/all
    https://tayta-backend-vpoh-dev.fl0.io/products/:id

    https://tayta-backend-vpoh-dev.fl0.io/users/all
    https://tayta-backend-vpoh-dev.fl0.io/users/:id

    https://tayta-backend-vpoh-dev.fl0.io/seller/all
    https://tayta-backend-vpoh-dev.fl0.io/seller/:id

*/