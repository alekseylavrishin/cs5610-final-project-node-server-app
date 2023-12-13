import mongoose, {Schema} from "mongoose";

const ingredientsSchema = new mongoose.Schema(
    {
        recipeId: {type: String},
        recipeName: String,
        extendedIngredients : [
            {
                id: Number,
                original: String
        }
        ]

    },
    { collection: "ingredients"}
);
export default ingredientsSchema;