import nutritionSchema from "./schema.js";
import mongoose, {mongo} from "mongoose";
const model = mongoose.model("nutrition", nutritionSchema);
export default model;