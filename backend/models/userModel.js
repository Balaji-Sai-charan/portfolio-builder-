import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';  // Generate unique IDs

const userSchema = new mongoose.Schema(
    {
        username: { type: String, required: true },
        password: { type: String, required: true },
        firstName: { type: String, default: "" },
        lastName: { type: String, default: "" },
        email: { type: String, default: "" },
        mobileNumber: { type: String, default: "" },
        portfolio: { type: String, default: "" },
        resume: { type: String, default: "" },
        address: { type: String, default: "" },
        carrierObjective: { type: String, default: "" },
        roles: { type: [String], default: [] },
        education: [{ qualification: String, institution: String, percentage: String, range: String }],
        skills: { type: [String], default: [] },
        experience: [
            {
                company: String,
                years: String,
                place: String,
                range: String,
                description: String
            }
        ],
        projects: [
            {
                title: String,
                image: String,
                description: String,
                github: String,
                live: String,
                range: String,
                category: String  // New category field
            }
        ],
        resumeId: { type: String, default: uuidv4 },  // Unique ID for sharing
    },
    { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
