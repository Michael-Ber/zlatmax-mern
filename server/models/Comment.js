import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema(
    { 
        name: { type: String, required: true },
        text: { type: String, required: true },
        reply: [
            { type: mongoose.Types.ObjectId, ref: "Comment" }
        ]
    }, 
    { timestamps: true }
);

export default mongoose.model("Comment", CommentSchema);