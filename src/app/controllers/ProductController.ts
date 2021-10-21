import { Request, Response } from "express";
import { productService, ProductService } from "../services/ProductService";

class ProductController {
  constructor(private service: ProductService) {}

  async index(request: Request, response: Response) {
    const products = await this.service.findAll();
    return response.json(products);
  }
}

export const productController = new ProductController(productService);
