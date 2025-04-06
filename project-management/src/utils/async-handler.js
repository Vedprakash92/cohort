//We made it latter in the project, so it is not used in the project
const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(
            requestHandler(req, res, next))
            .catch((err) => next(err));
    }
} 

export { asyncHandler };