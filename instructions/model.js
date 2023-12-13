import ingredientsSchema from "./schema.js";
import mongoose, {mongo} from "mongoose";
import instructionSchema from "./schema.js";
const model = mongoose.model("instructions", instructionSchema);
export default model;