import express from "express";
import {
  addProduct,
  getProduct,
  getProducts,
} from "../controllers/product.controller.js";

const router = express.Router();

router.post("/create", addProduct);
router.get("/getProducts", getProducts);
router.get("/getProduct/:id", getProduct);

export default router;
