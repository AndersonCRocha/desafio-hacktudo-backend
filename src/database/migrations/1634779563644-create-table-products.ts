import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createTableProducts1634779563644 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

    await queryRunner.createTable(
      new Table({
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
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("products");

    await queryRunner.query('DROP EXTENSION "uuid-ossp"');
  }
}
