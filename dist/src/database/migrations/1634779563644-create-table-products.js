"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTableProducts1634779563644 = void 0;
const typeorm_1 = require("typeorm");
class createTableProducts1634779563644 {
    async up(queryRunner) {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
        await queryRunner.createTable(new typeorm_1.Table({
            name: "products",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true,
                    generationStrategy: "uuid",
                    default: "uuid_generate_v4()",
                },
                {
                    name: "name",
                    type: "varchar",
                },
                {
                    name: "price",
                    type: "varchar",
                },
                {
                    name: "announced_in",
                    type: "timestamp with time zone",
                },
                {
                    name: "photo_uri",
                    type: "varchar",
                },
                {
                    name: "address_district",
                    type: "varchar",
                },
            ],
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable("products");
        await queryRunner.query('DROP EXTENSION "uuid-ossp"');
    }
}
exports.createTableProducts1634779563644 = createTableProducts1634779563644;
