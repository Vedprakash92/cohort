import { body } from "express-validator";

const userRegistrationValidator = () => {
    return [
        body("email")
        .trim()
        .notEmpty().withMessage("Email is required")
        .isEmail().withMessage("Invalid email Id"),
        body("username")
        .trim()
        .notEmpty().withMessage("Username is required")
        .isLength({min: 3}).withMessage("Username should be atleast 3 characters long"),
        isLength({max: 13}).withMessage("Password should be atleast 13 characters long"),
    ];
}

const userLoginValidator = () => {
    return [
        body("email")
        .trim()
        .notEmpty().withMessage("Email is required")
        .isEmail().withMessage("Invalid email Id"),
        body("password")
        .notEmpty().withMessage("Password is required")
    ];
}