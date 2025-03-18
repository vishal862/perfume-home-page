import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from 'cors'
import productRouter from "./routes/product.routes.js";
import reviewRouter from "./routes/review.routes.js"

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors({ origin: "http://localhost:5174" }));

await mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("mongodb connected");
    app.listen(3000, () => {
      console.log("server is listening on port 3000");
    });
  })
  .catch((error) => {
    console.log("error while connecting ❌", error);
  });

app.use("/api/product", productRouter);
app.use("/api/review", reviewRouter)
