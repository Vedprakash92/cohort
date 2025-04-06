import app from "./app";
import dotenv from "dotenv";
import connectDB from "./db";

const PORT = process.env.PORT || 8080;
dotenv.config({
    path: "./.env"
});

connectDB().
then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})
.catch((error) => {
    console.error(`DB Connection error: ${error.message}`);
    process.exit(1);
});