import mongoose from "mongoose";

const nutritionSchema = new mongoose.Schema(
    {
        //user: {type: mongoose.Schema.Types.ObjectId, ref: "users"},
        recipeId: String,
        recipeName: String,
        carbohydrates: String,
        fat: String,
        calories: String,
        protein: String
    },
    { collection: "nutrition"}
);
export default nutritionSchema;