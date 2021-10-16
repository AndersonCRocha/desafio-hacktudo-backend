module.exports = {
  type: "postgres",
  url: `${process.env.DATABASE_URL}?sslmode=require`,
  entities: ['src/app/models/*.ts'],
  migrations: ['src/database/migrations/*.ts'],
  cli: {
    migrationsDir: 'src/database/migrations',
  },
}