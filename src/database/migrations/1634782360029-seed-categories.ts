import { MigrationInterface, QueryRunner } from "typeorm";
import { Category } from "../../app/models/Category";

export class seedCategories1634782360029 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager
      .createQueryBuilder()
      .insert()
      .into(Category)
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

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager
      .createQueryBuilder()
      .delete()
      .from(Category)
      .execute();
  }
}
