import "reflect-metadata";
import { createConnection } from "typeorm";

createConnection().then(async connection => {
  console.log("📦 Database connected!!!");
  await connection.runMigrations();
});
