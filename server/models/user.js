import mongoose from "mongoose";

const userSchema = mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
            min: 1,
            max: 25
        },
        lastName: {
            type: String,
            required: true,
            min: 1,
            max: 25
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            min: 5,
        },
        password: {
            type: String,
            required: true,
            min: 8
        },
        subscribed: {
            type: Boolean,
            required: true,
            default: true
        },
        location: String
    },
    { timestamps: true}
)

const User = mongoose.model('User', userSchema)
export default User;