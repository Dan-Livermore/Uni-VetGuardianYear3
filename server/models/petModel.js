import mongoose from "mongoose";

const petSchema = mongoose.Schema(
    {
        name:{
            type: String,
            required: true,
        },
        ownerID:{
            type: String,
            required: true,
        },
        animal:{
            type: String,
            required: true,
        },
        weight:{
            type: Number,
            required: true,
        },
        gender:{
            type: String,
            required: true,
        },
        dob:{
            type: Date,
            required: true,
        }
    },
    {
        timestamps: true,
    }
)

export const Pet = mongoose.model('Pet', petSchema);