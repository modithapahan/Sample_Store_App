import "dotenv/config";
import express from "express";
import cors from "cors";
import { connect } from "./utils/database";

import itemRouter from './routes/items';

const app = express();
const PORT = process.env.PORT || "8090";

app.use(cors());
app.use(express.json());

app.use('/items', itemRouter);

app.listen(PORT, () => {
  console.log(`🚀 Database is up and running on PORT ${PORT}`);
  connect();
});
