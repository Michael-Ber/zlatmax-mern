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
            { type: mongoose.Types.ObjectId, ref: "Good" }
        ]
    },
    { timestamps: true }
);

export default mongoose.model("Users", UsersSchema);