import { Router } from "express";
import { productController } from "../controllers/ProductController";

export const productsRouter = Router().get(
  "/",
  productController.index.bind(productController)
);
