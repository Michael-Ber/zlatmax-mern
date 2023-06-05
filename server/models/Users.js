import mongoose from 'mongoose';

const UsersSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        cort: [
            { type: Object }
        ],
        favorites: [
            { type: mongoose.Types.ObjectId, ref: "Good" }
        ],
        order: [
            { type: Object }
        ],
        comments: [
            { type: mongoose.Types.ObjectId, ref: "Comment" }
        ]
    },
    { timestamps: true }
);

export default mongoose.model("Users", UsersSchema);