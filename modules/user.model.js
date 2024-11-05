import mongoose from "mongoose";
 // user schema 
const userSchema = new mongoose.Schema({
  dni: { type: Number, required: true },
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  dob: { type: Date, required: true }, // format: 'YYYY-MM-DD 
  role: { type: String, enum: ["admin", "user"], default: "user" },
  phone_number: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isActive: { type: Boolean, default: true },
},
{
  timestamps: true, // timestamp 
});


export default mongoose.model("User", userSchema); // export user schema