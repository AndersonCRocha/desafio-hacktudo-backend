"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = exports.productService = void 0;
const typeorm_1 = require("typeorm");
const Product_1 = require("../models/Product");
class ProductService {
    async findAll() {
        return await (0, typeorm_1.getRepository)(Product_1.Product).find({ relations: ["categories"] });
    }
}
exports.ProductService = ProductService;
const productService = new ProductService();
exports.productService = productService;
