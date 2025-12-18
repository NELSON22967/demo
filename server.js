import express from 'express';
import cors from 'cors';

import dotenv from 'dotenv';
import connectDb from './dataBase/db.js'

//importing routes
import usersRouter from '../demo/routes/userRoutes.js'; // Import the router


// Initialize Express app
const app = express();

//middleware
app.use(express.json());
app.use('/api/', usersRouter);

// Load environment variables from .env file
dotenv.config();

app.use(cors());


connectDb();


const PORT = process.env.PORT || 3000;
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});