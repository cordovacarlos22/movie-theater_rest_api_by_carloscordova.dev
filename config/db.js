import mongoose, { connection } from "mongoose";
import dotenv from "dotenv";

dotenv.config();


// Connect to MongoDB

const connect = () => {
  try {

    mongoose.connect(process.env.DB_CONNECT_URL);
    connection.once('open', () => {
      console.log('Connected to MongoDB sucessful ✅ ')

      connection.error(err => console.log('Error connecting to MongoDB sucessful ❌ : ', + err))

    });
  } catch (error) {
    console.error("Error connecting to MongoDB 🔥:", error);
  }
};

// Export connect function to be used in other files
export { connect };