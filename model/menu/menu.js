import mongoose from "mongoose";

const menuSchema = new mongoose.Schema({

    menuDate: {
        type: String,
        required: true
    },
})

export default mongoose.model("menu", menuSchema)