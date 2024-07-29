import { Sequelize } from "sequelize-typescript";
import { config } from "./config/config";

export const sequelize = new Sequelize({
  username: "postgres",
  password: "udagramdb",
  database: "postgres",
  host: "udagram-database.cr6ew6yq46zn.us-east-1.rds.amazonaws.com",

  dialect: "postgres",
  storage: ":memory:",
});
