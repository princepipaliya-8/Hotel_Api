import mongoose from "mongoose";

const ingredientTypeSchema = new mongoose.Schema({
    ingredientCode: {
        type: String,
        required: true
    },
    ingredientDescription: {
        type: String,
        required: true
    },
})

export default mongoose.model("ingredientType", ingredientTypeSchema)