import { MigrationInterface, QueryRunner } from "typeorm";
import { Category } from "../../app/models/Category";
import { Product } from "../../app/models/Product";

export class seedProducts1634784659722 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const categoryOne = await queryRunner.manager
      .getRepository(Category)
      .findOneOrFail({
        where: {
          slug: "category-one",
        },
      });

    const categoryTwo = await queryRunner.manager
      .getRepository(Category)
      .findOneOrFail({
        where: {
          slug: "category-two",
        },
      });

    await queryRunner.manager.save(
      Product,
      [
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
      ],
      {}
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager
      .createQueryBuilder()
      .delete()
      .from(Product)
      .execute();
  }
}
