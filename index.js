import express from "express";
import { connect } from './config/db.js'
import dotenv from "dotenv";
import userRoutes from './routes/user.route.js'
import movieRoute from './routes/movie.route.js'

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();


// routes 
app.use(express.json());; // configuration to use json 
app.use('/api/v1', userRoutes);
app.use('/api/v1', movieRoute);

// Connect to MongoDB
connect().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});