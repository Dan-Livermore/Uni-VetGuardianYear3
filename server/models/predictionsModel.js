import mongoose from "mongoose";

const predictionsSchema = mongoose.Schema(
    {
        petID:{
            type: String,
            unique: true,
            required: true,
        },
        time:{
            type: Date,
            required: true,
        },
        output: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true,
    }
)

export const Predictions = mongoose.model('Predictions', predictionsSchema);