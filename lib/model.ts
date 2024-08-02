import mongoose from "mongoose";
import connectDB from "./db";
const { Schema, model, models } = mongoose;

connectDB();
// Define the schema for the Post model
const postSchema = new Schema(
  {
    options: [
      {
        img: {
          type: String,
          required: true, // Ensure the img field is required
        },
        text: {
          type: String,
          required: true, // Ensure the text field is required
        },
        points: [{ type: String }],
      },
    ],
  },
  {
    timestamps: true, // Automatically manage createdAt and updatedAt fields
  }
);

// Check if the model already exists before defining it
const Post = models.Post || model("Post", postSchema);

export default Post;
