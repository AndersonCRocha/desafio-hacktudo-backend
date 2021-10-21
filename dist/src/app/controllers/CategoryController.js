"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryController = void 0;
const CategoryService_1 = require("../services/CategoryService");
class CategoryController {
    constructor(service) {
        this.service = service;
    }
    async index(request, response) {
        const categories = await this.service.findAll();
        return response.json(categories);
    }
}
exports.categoryController = new CategoryController(CategoryService_1.categoryService);
