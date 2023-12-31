"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userHandler_1 = require("../handlers/userHandler");
const userRouter = (0, express_1.Router)();
userRouter.get("/", userHandler_1.getUsersHandler);
userRouter.get("/all", userHandler_1.getAllUsersHandler);
userRouter.get("/:id", userHandler_1.getUserIdHandler);
userRouter.put("/:id", userHandler_1.updateUserHandler);
userRouter.post("/", userHandler_1.createUserHandler);
userRouter.delete("/:id", userHandler_1.deleteUserHandler);
exports.default = userRouter;
