import exp from "constants";
import express from "express";
import { UserController } from "./user.controller";

const router = express.Router();

// routes
router.post("/create-user", UserController.insertIntoDB);
router.post("/profile", UserController.insertOrUpdate);
router.get("/", UserController.getUsers);
router.get("/:id", UserController.getSingleUser);

export const UserRoutes = router;
