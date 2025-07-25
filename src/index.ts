import "dotenv/config";
import express from "express";
import Express from "express";
import "tsconfig-paths/register";
import { connect } from "@/utils";
const app = express();
const port = process.env.PORT || 8080;

const ROUTE_PREFIX = "/api/v1";
connect();

app.get(ROUTE_PREFIX, (_req: Express.Request, res: Express.Response) => {
  res.json({ message: "Hello, World!" });
});

app.listen(port, () => {
  process.stdout.write(`Server is running on http://localhost:${port}`);
});
