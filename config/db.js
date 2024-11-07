import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();


// Connect to MongoDB

const connect = async () => {
  try {

    mongoose.connect(process.env.DB_CONNECT_URL);
    const { connection } = await mongoose

    connection.once('open', () => {
      console.log('Connected to MongoDB sucessful ✅ ')

      connection.on('error', () => {
        console.log('Error connecting to MongoDB sucessful ❌')
      })

    });
  } catch (error) {
    console.error("Error connecting to MongoDB 🔥:", error);
  }
};

// Export connect function to be used in other files
export { connect };