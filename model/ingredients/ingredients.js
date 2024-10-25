import mongoose from "mongoose";

const ingredientsSchema = new mongoose.Schema({
    ingredientName: {
        type: String,
        required: true
    },
    ingredientDescriptionDetailes: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ingredientType",
        required: true
    },

})

export default mongoose.model("ingredients", ingredientsSchema)