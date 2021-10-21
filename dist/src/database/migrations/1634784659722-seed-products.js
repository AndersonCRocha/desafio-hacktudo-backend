"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedProducts1634784659722 = void 0;
const Category_1 = require("../../app/models/Category");
const Product_1 = require("../../app/models/Product");
class seedProducts1634784659722 {
    async up(queryRunner) {
        const categoryOne = await queryRunner.manager
            .getRepository(Category_1.Category)
            .findOneOrFail({
            where: {
                slug: "category-one",
            },
        });
        const categoryTwo = await queryRunner.manager
            .getRepository(Category_1.Category)
            .findOneOrFail({
            where: {
                slug: "category-two",
            },
        });
        await queryRunner.manager.save(Product_1.Product, [
            {
                name: "Product One",
                price: 25.5,
                announcedIn: new Date(),
                addressDistrict: "Candeias",
                photoUri: "https://source.unsplash.com/random",
                categories: [categoryOne, categoryTwo],
            },
            {
                name: "Product Two",
                price: 50.55,
                announcedIn: new Date(),
                addressDistrict: "Brasil",
                photoUri: "https://source.unsplash.com/random",
                categories: [categoryOne],
            },
            {
                name: "Product Three",
                price: 49.99,
                announcedIn: new Date(),
                addressDistrict: "Ibirapuera",
                photoUri: "https://source.unsplash.com/random",
                categories: [categoryTwo],
            },
        ], {});
    }
    async down(queryRunner) {
        await queryRunner.manager
            .createQueryBuilder()
            .delete()
            .from(Product_1.Product)
            .execute();
    }
}
exports.seedProducts1634784659722 = seedProducts1634784659722;
