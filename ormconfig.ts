import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";

const config: PostgresConnectionOptions = {
  type: "postgres",
  url: process.env.DATABASE_URL,
  entities: ['src/app/models/*.ts'],
  migrations: ['src/database/migrations/*.ts'],
  cli: {
    migrationsDir: 'src/database/migrations',
  },
  migrationsRun: true,
  uuidExtension: "uuid-ossp"
}

module.exports = config