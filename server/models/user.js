import mongoose from "mongoose";

const userSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            min: 3,
            max: 25
        },
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
    }
)

const User = mongoose.model('User', userSchema)
export default User;