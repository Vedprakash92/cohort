import { ApiResponce } from "../utils/api-responce";

const healthcheck = (req, res) => {
    res.status(200).json( new ApiResponce(200, { message: "Server is up and running" }));
}

export { healthcheck };