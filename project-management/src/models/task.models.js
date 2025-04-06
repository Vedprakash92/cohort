import mongoose, {Schema} from "mongoose";
import {AvailableTaskStatues, taskStatusEnum} from "../constants.js";

const taskSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String
    },
    project: {
        type: Schema.Types.ObjectId,
        ref: "Project",
        required: true,
    },
    assignedTo: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    assignedBy: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    status: {
        type: String,
        enum: AvailableTaskStatues,
        default: taskStatusEnum.TODO,
    },
    attachments: {
        type: [{
            url: String,
            MimeType: String,
            size: Number,
        }],
        default: [],
        
    },
}, {timestamps: true});

export const Task = mongoose.model("Task", taskSchema);