"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const typeorm_1 = require("typeorm");
(0, typeorm_1.createConnection)().then(async (connection) => {
    console.log("📦 Database connected!!!");
    await connection.runMigrations();
});
