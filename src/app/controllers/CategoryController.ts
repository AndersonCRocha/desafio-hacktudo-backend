import { Request, Response } from "express";
import { categoryService, CategoryService } from "../services/CategoryService";

class CategoryController {
  constructor(private service: CategoryService) {}

  async index(request: Request, response: Response) {
    const categories = await this.service.findAll();
    return response.json(categories);
  }
}

export const categoryController = new CategoryController(categoryService);
