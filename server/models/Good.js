import mongoose from "mongoose";

const GoodSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        category: {
            type: String,
            required: true
        },
        imgUrl: {
            type: String,
            required: true
        },
        size: {
            type: String,
            required: true
        },
        color: {
            type: String,
            required: true
        },
        rating: {
            type: Number,
            required: true
        },
        price: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
);

export default mongoose.model("Good", GoodSchema);