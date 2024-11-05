import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  director: { type: String, required: true },
  release_date: { type: Date, required: true },
  rate: { type: Number, required: true },
  duration: { type: Number, required: true },
  genre: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  available_seats: { type: Number, required: true },
  is_available: { type: Boolean, default: true },
  image_url: { type: String, required: true } // URL of the movie poster or cover image
},
  {
    timestamps: true, // timestamp
  });

export default mongoose.model('Movie', movieSchema);