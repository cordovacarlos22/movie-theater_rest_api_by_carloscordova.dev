import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  director: { type: String, required: true },
  release_date: { type: Date, required: true },
  rate: { type: Number, required: true, min: 1, max: 10 }, // Validated to be between 1 and 10
  duration: { type: Number, required: true }, // Duration in minutes
  genre: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true, min: 0 }, // Ensuring price is non-negative
  available_seats: { type: Number, required: true },
  is_available: { type: Boolean, default: true },
  image_url: [{ type: String, required: true }] // URL of the movie poster or cover image
},
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  });

export default mongoose.model('Movie', movieSchema);