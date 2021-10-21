import { getRepository } from "typeorm";
import { Product } from "../models/Product";

class ProductService {
  async findAll() {
    return await getRepository(Product).find({ relations: ["categories"] });
  }
}

const productService = new ProductService();

export { productService, ProductService };
