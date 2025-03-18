import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  images: [{ type: String }],
  sizes: [{ type: String }],
  reviews: [
    {
      user: String,
      rating: Number,
      comment: String,
    },
  ],
});

export const Product = mongoose.model("Product", ProductSchema);
