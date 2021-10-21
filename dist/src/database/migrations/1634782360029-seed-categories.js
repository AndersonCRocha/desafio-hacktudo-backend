"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedCategories1634782360029 = void 0;
const Category_1 = require("../../app/models/Category");
class seedCategories1634782360029 {
    async up(queryRunner) {
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into(Category_1.Category)
            .values([
            {
                id: "537979b5-9cb7-4995-bf6d-8247bfecc69f",
                name: "Category One",
                slug: "category-one",
                iconUri: "category-one.svg",
            },
            {
                id: "defb7d09-bf82-4e17-9054-3a28fa85e557",
                name: "Category Two",
                slug: "category-two",
                iconUri: "category-two.svg",
            },
            {
                id: "a2656866-eefc-4d76-8f45-e30e9dfbc780",
                name: "Category Three",
                slug: "category-three",
                iconUri: "category-three.svg",
            },
        ])
            .execute();
    }
    async down(queryRunner) {
        await queryRunner.manager
            .createQueryBuilder()
            .delete()
            .from(Category_1.Category)
            .execute();
    }
}
exports.seedCategories1634782360029 = seedCategories1634782360029;
