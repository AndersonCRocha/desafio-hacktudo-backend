import { Router } from "express";
import { categoryController } from "../controllers/CategoryController";

export const categoriesRouter = Router().get(
  "/",
  categoryController.index.bind(categoryController)
);
