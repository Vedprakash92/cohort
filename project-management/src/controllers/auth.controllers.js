import { asyncHandler } from "../utils/async-handler"

const registerUser = asyncHandler((req, res) => {
    const {userName, email, fullName, password, role} = req.body;
});