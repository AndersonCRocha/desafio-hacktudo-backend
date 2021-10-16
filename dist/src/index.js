"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
require("./database/connect");
const routes_1 = require("./app/routes");
dotenv_1.default.config();
(0, express_1.default)()
    .use(express_1.default.json())
    .use(routes_1.router)
    .listen(process.env.PORT, () => console.log(`🔥 Server running in http://localhost:${process.env.PORT}`));
