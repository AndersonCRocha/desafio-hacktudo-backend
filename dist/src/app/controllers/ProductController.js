"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productController = void 0;
const ProductService_1 = require("../services/ProductService");
class ProductController {
    constructor(service) {
        this.service = service;
    }
    async index(request, response) {
        const products = await this.service.findAll();
        return response.json(products);
    }
}
exports.productController = new ProductController(ProductService_1.productService);
