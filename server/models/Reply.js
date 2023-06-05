import mongoose from "mongoose";

const ReplySchema = new mongoose.Schema(
    { 
        name: { type: String, required: true },
        text: { type: String, required: true }
    }, 
    { timestamps: true }
);

export default mongoose.model("Reply", ReplySchema);