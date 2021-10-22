import { NextFunction, Request, Response } from "express";

export function cors(request: Request, response: Response, next: NextFunction) {
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Credentials", "true");
  response.header(
    "Access-Control-Allow-Methods",
    "GET,PUT,POST,DELETE,OPTIONS"
  );
  response.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept,content-type,application/json"
  );
  next();
}
