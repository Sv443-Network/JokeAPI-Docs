import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
  },
  profilePicture: { data: Buffer, contentType: String },
  tempToken: { type: Number }
}, { timestamps: true });

export default userSchema;
