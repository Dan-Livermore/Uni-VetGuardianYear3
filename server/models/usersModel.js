import mongoose from "mongoose";

const userSchema = mongoose.Schema(
    {
        email:{
            type: String,
            unique: true,
            required: true,
        },
        password:{
            type: String,
            required: true,
        },
        firstname: {
            type: String,
            required: true,
        },
        lastname: {
            type: String,
            required: true,
        },
        admin:{
            type: Boolean,
            default: false,
            required: true,
        }
    },
    {
        timestamps: true,
    }
)

export const User = mongoose.model('User', userSchema);