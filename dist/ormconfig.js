"use strict";
const entities = [
    process.env.PRODUCTION ? "dist/src/app/models/*.js" : "src/app/models/*.ts",
];
const migrations = [
    process.env.PRODUCTION
        ? "dist/src/database/migrations/*.js"
        : "src/database/migrations/*.ts",
];
const migrationsDir = process.env.PRODUCTION
    ? "dist/src/database/migrations"
    : "src/database/migrations";
module.exports = {
    type: "postgres",
    url: process.env.DATABASE_URL,
    entities,
    migrations,
    cli: {
        migrationsDir,
    },
    migrationsRun: true,
    uuidExtension: "uuid-ossp",
    extra: {
        ssl: {
            rejectUnauthorized: false,
        },
    },
};
