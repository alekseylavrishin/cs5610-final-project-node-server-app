import express from 'express';
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import UserRoutes from "./users/routes.js";
import LikesRoutes from "./likes/routes.js";
import session from "express-session";
import FollowsRoutes from "./follows/routes.js";
import FeaturesRoutes from "./features/routes.js";

mongoose.connect("mongodb://127.0.0.1:27017/cs-5610-final-project");
const app = express();
app.use(cors({
        credentials: true,
        origin: "http://localhost:3000"
}));
const sessionOptions = {
    secret: "any string",
    resave: false,
    saveUninitialized: false
};

app.use(session(sessionOptions));
app.use(express.json());
UserRoutes(app);
LikesRoutes(app);
FollowsRoutes(app);
FeaturesRoutes(app);

app.listen(process.env.PORT || 4000);
