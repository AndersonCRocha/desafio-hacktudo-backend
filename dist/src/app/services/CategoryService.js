"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryService = exports.categoryService = void 0;
const typeorm_1 = require("typeorm");
const Category_1 = require("../models/Category");
class CategoryService {
    async findAll() {
        return await (0, typeorm_1.getRepository)(Category_1.Category).find();
    }
}
exports.CategoryService = CategoryService;
const categoryService = new CategoryService();
exports.categoryService = categoryService;
