import productModel from "../Models/productModel.js";
import axios from "axios";

const initializeDatabase = async (req, res) => {
    const { month } = req.query;

    try {
        // Check if the database is already initialized
        let dataCount = await productModel.find({});

        if (dataCount.length === 0) {
            let data;

            // Fetch data from the given API
            try {
                const response = await axios.get(process.env.TRANSACTIONS_API);
                data = response.data;
            } catch (err) {
                console.log(err.message);
                return res.status(404).send(err.message);
            }

            // Initialize database with the fetched data
            if (data) {
                await productModel.create(data);
                return res.send({
                    success: true,
                    message: "Database initialization successful",
                });
            }
        } else {
            return res.send("Database is already initialized");
        }
    } catch (error) {
        console.log("Error in database initialization:", error.message);
        return res.status(500).send(error.message);
    }
};

export default initializeDatabase;
