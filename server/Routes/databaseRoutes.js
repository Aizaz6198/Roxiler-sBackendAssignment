import express from 'express';
import intializeDatabase from '../Controllers/databaseController.js';

const Router = express.Router();

// Initialize Database || GET
Router.get('/', (req, res)=> {
    res.send("Please initialize database")
})
Router.get('/initialize_database', intializeDatabase)


export default Router;