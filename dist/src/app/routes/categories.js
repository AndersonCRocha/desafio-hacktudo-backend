"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoriesRouter = void 0;
const express_1 = require("express");
const CategoryController_1 = require("../controllers/CategoryController");
exports.categoriesRouter = (0, express_1.Router)().get("/", CategoryController_1.categoryController.index.bind(CategoryController_1.categoryController));
