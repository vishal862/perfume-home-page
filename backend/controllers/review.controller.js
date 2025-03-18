import { Product } from "../models/product.model.js";

export const createReview = async (req, res) => {
  const { productId, user, rating, comment } = req.body;

  if (!user || !rating || !comment) {
    return res.status(404).json({ message: "enter all the fields" });
  }

  const newReview = { user, rating, comment };
  const product = await Product.findById(productId);

  if (!product) {
    return res.status(400).json({ message: "product not found" });
  }

  product.reviews.push(newReview);
  await product.save();

  return res.json(product)
};
