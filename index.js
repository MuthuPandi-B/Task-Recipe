import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./Database/dbConfig.js";
import recipeRouter from "./Routers/recipeRouter.js"

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());


connectDB();

app.get("/", (req, res) => {
  res.status(200).send("Welcome to Our Recipe Api");
});

app.use("/api/recipes",recipeRouter)

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log("server started and running on the port");
});