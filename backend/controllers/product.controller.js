import { Product } from "../models/product.model.js";

export const addProduct = async (req, res) => {
  try {
    const { name, description, price, images, sizes } = req.body;

    if (!name || !description || !price || !images || !sizes) {
      return res
        .status(400)
        .json({ message: "Please provide all required details." });
    }

    const product = await Product.create({
      name,
      description,
      price,
      images,
      sizes,
    });

    return res
      .status(201)
      .json({ message: "Product added successfully.", product });
  } catch (error) {
    console.error("Error adding product:", error);
    return res.status(500).json({
      message: "An error occurred while adding the product.",
      error: error.message,
    });
  }
};

export const getProducts = async (req, res) => {
  const products = await Product.find();

  return res.json(products);
};

export const getProduct = async (req,res) => {
    const product = await Product.findById(req.params.id);

    if(!product){
        return res.status(400).json({message : "product not found"})
    }

    return res.status(200).json(product)
}
