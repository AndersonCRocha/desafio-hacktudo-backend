"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTableCategories1634781824957 = void 0;
const typeorm_1 = require("typeorm");
class createTableCategories1634781824957 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "categories",
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
                    name: "slug",
                    type: "varchar",
                    isUnique: true,
                },
                {
                    name: "icon_uri",
                    type: "varchar",
                },
            ],
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable("categories");
    }
}
exports.createTableCategories1634781824957 = createTableCategories1634781824957;
