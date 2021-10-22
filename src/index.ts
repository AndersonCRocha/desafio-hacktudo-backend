import express from "express";
import dotenv from "dotenv";
import cors, { CorsOptions } from "cors";

import "./database/connect";

import { router } from "./app/routes";

dotenv.config();

const corsOptions: CorsOptions = {
  origin: "*",
  methods: ["GET", "POST", "OPTIONS", "PUT", "DELETE"],
};

express()
  .use(cors(corsOptions))
  .use(express.json())
  .use(router)
  .listen(process.env.PORT, () =>
    console.log(`🔥 Server running in http://localhost:${process.env.PORT}`)
  );
