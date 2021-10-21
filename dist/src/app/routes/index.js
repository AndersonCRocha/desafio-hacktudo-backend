"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const categories_1 = require("./categories");
const products_1 = require("./products");
exports.router = (0, express_1.Router)()
    .use("/categories", categories_1.categoriesRouter)
    .use("/products", products_1.productsRouter);
