import mongoose from "mongoose";

const staffSchema = new mongoose.Schema({
    staffRole: {
        type: String,
        required: true
    },
    staffDescription: {
        type: String,
        required: true
    },
})

export default mongoose.model("staff", staffSchema)