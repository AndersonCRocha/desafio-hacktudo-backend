import { MigrationInterface, QueryRunner } from "typeorm";

export class createRelationCategoryProduct1634782275766
  implements MigrationInterface
{
  name = "createRelationCategoryProduct1634782275766";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "product_categories" ("productsId" uuid NOT NULL, "categoriesId" uuid NOT NULL, CONSTRAINT "PK_bc0bce5de12ebedb70ddcb3bb34" PRIMARY KEY ("productsId", "categoriesId"))`
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_3d78977f2f60b4f7a1d833e418" ON "product_categories" ("productsId") `
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_c642709e6ad4582ed11aca458f" ON "product_categories" ("categoriesId") `
    );
    await queryRunner.query(
      `ALTER TABLE "product_categories" ADD CONSTRAINT "FK_3d78977f2f60b4f7a1d833e4181" FOREIGN KEY ("productsId") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE`
    );
    await queryRunner.query(
      `ALTER TABLE "product_categories" ADD CONSTRAINT "FK_c642709e6ad4582ed11aca458f9" FOREIGN KEY ("categoriesId") REFERENCES "categories"("id") ON DELETE CASCADE ON UPDATE CASCADE`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "product_categories" DROP CONSTRAINT "FK_c642709e6ad4582ed11aca458f9"`
    );
    await queryRunner.query(
      `ALTER TABLE "product_categories" DROP CONSTRAINT "FK_3d78977f2f60b4f7a1d833e4181"`
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_c642709e6ad4582ed11aca458f"`
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_3d78977f2f60b4f7a1d833e418"`
    );
    await queryRunner.query(`DROP TABLE "product_categories"`);
  }
}
