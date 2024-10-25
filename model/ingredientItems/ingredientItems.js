import mongoose from "mongoose";

const ingredientItemsSchema = new mongoose.Schema({
    ingredientItems: {
        type: String,
        require: true
    },
    ingredients: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ingredients",
        require: true
    }
})

export default mongoose.model("ingredientItems", ingredientItemsSchema) 