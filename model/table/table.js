import mongoose from "mongoose";
import { type } from "os";

const tableSchema = new mongoose.Schema({
    tableNo: {
        type: String,
        required: true
    },
    tableSeat: {
        type: String,
        required: true
    },
    booking: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "booking",
        required: true
    }
})

export default mongoose.model("table", tableSchema)