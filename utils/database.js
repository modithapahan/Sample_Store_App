import mongoose from "mongoose";
import config from "../config/url";

let database;

const connect = async () => {
  const MONGODB_URL = config.DATABASE_CONNECTION_STRING;

  if (database) return;

  await mongoose
    .connect(MONGODB_URL)
    .then((connection) => {
      database = connection;
      console.log("Database Synced");
    })
    .catch((error) => {
      console.log(error.message);
    });
};

export { connect };
