"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsRouter = void 0;
const express_1 = require("express");
const ProductController_1 = require("../controllers/ProductController");
exports.productsRouter = (0, express_1.Router)().get("/", ProductController_1.productController.index.bind(ProductController_1.productController));
