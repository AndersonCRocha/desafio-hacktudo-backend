import { getRepository } from "typeorm";
import { Category } from "../models/Category";

class CategoryService {
  async findAll() {
    return await getRepository(Category).find();
  }
}

const categoryService = new CategoryService();

export { categoryService, CategoryService };
