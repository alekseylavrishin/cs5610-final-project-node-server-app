import express from 'express';
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import UserRoutes from "./users/routes.js";
import test from "./test.js";

mongoose.connect("mongodb://127.0.0.1:27017/cs5610-final-project");
const app = express();
app.use(cors());
app.use(express.json());
UserRoutes(app);

test(app)

app.listen(process.env.PORT || 4000);
