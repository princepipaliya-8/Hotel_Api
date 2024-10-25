import mongoose from "mongoose";

const menuDetailesSchema = new mongoose.Schema({

    menuItems: {
        type: String,
        required: true
    },
    menuPrice: {
        type: String,
        required: true
    },
    itemDescription: {
        type: String,
        required: true
    },
    menuDate: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "menu",
        required: true
    }, ingredients: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ingredientItems",
        required: true
    }
})

export default mongoose.model("menuDetailes", menuDetailesSchema)