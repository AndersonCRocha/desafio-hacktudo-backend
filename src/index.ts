import express from "express";
import dotenv from "dotenv";
import cors from "cors";

// import "./database/connect";

import { router } from "./app/routes";

dotenv.config();

express()
  .use(cors())
  .use(express.json())
  .use(router)
  .listen(process.env.PORT, () =>
    console.log(`🔥 Server running in http://localhost:${process.env.PORT}`)
  );
