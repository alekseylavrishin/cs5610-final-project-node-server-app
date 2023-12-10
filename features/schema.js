import mongoose from "mongoose";

const featuresSchema = new mongoose.Schema(
    {
        user: {type: mongoose.Schema.Types.ObjectId, ref: "users"},
        recipeId: String,
        recipeName: String,
        recipeImage: String
    },
    { collection: "features"}
);
export default featuresSchema;