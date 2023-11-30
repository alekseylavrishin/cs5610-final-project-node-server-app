import schema from "./schema.js";
import mongoose, {mongo} from "mongoose";
const model = mongoose.model("likes", schema);
export default model;