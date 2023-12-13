import mongoose, {Schema} from "mongoose";

const instructionSchema = new mongoose.Schema(
    {
        recipeId: {type: String},
        recipeName: String,
        instructions : [
            {
                number: Number,
                step: String
        }
        ]

    },
    { collection: "instructions"}
);
export default instructionSchema;