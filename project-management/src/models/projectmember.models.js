import mongoose, {Schema} from "mongoose";
import {AvailableUserRoles, userRolesEnum} from "../constants/user.constants";

const projectMemberSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    project: {
        type: Schema.Types.ObjectId,
        ref: "Project",
        required: true
    },
    role: {
        type: String,
        enum: AvailableUserRoles,
        default: userRolesEnum.MEMBER
    }
},{timestamps: true});

export const ProjectMember = mongoose.model("ProjectMember", projectMemberSchema);