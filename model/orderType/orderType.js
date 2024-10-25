import mongoose from "mongoose";

const orderTypeSchema = new mongoose.Schema({
    orderType: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "orderType",
        require: true
    }

})

export default mongoose.model("orderType", orderTypeSchema)