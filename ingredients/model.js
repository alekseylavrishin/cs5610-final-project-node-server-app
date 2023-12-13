import ingredientsSchema from "./schema.js";
import mongoose, {mongo} from "mongoose";
const model = mongoose.model("ingredients", ingredientsSchema);
export default model;