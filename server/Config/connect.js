import mongoose from "mongoose";

const connectDB = (req, res) => {
    try {
        mongoose.connect(process.env.MONGO_URI)
        console.log("Database connection successful");
    } catch (error) {
        console.log("Error in connecting database", error.message);
    }
}

export default connectDB;