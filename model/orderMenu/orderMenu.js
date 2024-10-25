import mongoose from "mongoose";

const orderMenuSchema = new mongoose.Schema({
    foodType: {
        type: String,
        required: true
    },
    orderDetailes: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "order",
        required: true
    },
    customerOrder: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "menuDetailes",
        required: true
    }
})

export default mongoose.model("orderMenu", orderMenuSchema)
