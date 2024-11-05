import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema({
  client: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  movie: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie', required: true },
  total_tickets: { type: Number, required: true, default: 1 },
  total_price: {
    type: Number,
    required: true,
    validate: {
      validator: async function () {
        // Populate the movie field to access its price
        await this.populate('movie');
        // Calculate total_price based on total_tickets * movie.price
        return this.total_price === this.total_tickets * this.movie.price;
      },
      message: 'The total_price must be equal to total_tickets * movie.price.'
    }
  },
  screening_time: { type: String, required: true },
  screening_date: { type: Date, required: true },
  seat: { type: Number, required: true },
},
  {
  timestamps: true, // Adds createdAt and updatedAt fields
});

export default mongoose.model('Ticket', ticketSchema);