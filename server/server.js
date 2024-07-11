import express from 'express';
import 'colors';
import dotenv from 'dotenv';
import connectDB from './Config/connect.js';
import transactionRouter from './Routes/transactionRoutes.js';
import databaseRouter from './Routes/databaseRoutes.js';
import cors from 'cors';

// Load environment variables from .env file
dotenv.config();

// Initialize Express app
const app = express();

// Enable Cross-Origin Resource Sharing (CORS)
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

// Connect to the database
connectDB(); 

// Route Middlewares
app.use('/', databaseRouter); // Database Routes
app.use('/', transactionRouter); // Transaction Routes

// Start server and listen on the port specified in .env file
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log("Server is running on PORT", PORT);
});
