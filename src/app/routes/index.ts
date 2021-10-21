import { Router } from "express";
import { categoriesRouter } from "./categories";
import { productsRouter } from "./products";

export const router = Router()
  .use("/categories", categoriesRouter)
  .use("/products", productsRouter);
