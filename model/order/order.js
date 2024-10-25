import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({

    foodType: {
        type: String,
        require: true
    },
    staffMember: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'staffMember',
        required: true
    },
    tableDetailes: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "table",
        require: true

    },

})

export default mongoose.model("order", orderSchema)