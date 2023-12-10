import featuresSchema from "./schema.js";
import mongoose from "mongoose";
const model = mongoose.model("features", featuresSchema);
export default model;