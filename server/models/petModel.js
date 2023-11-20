import mongoose from "mongoose";

const petSchema = mongoose.Schema(
    {
        name:{
            type: String,
            required: true,
        },
        dob:{
            type: Date,
            required: true,
        },
        animal:{
            type: String,
            required: true,
        },
        Weight:{
            type: Number,
            required: true,
        },
        gender:{
            type: String,
            required: true,
        },
        owner:{
            type: Number,
            required: true,
        }
    },
    {
        timestamps: true,
    }
)

export const Pet = mongoose.model('Pet', petSchema);