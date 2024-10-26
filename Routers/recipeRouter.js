import express from 'express';
import { createrecipe, deleterecipe, getAllrecipes, getrecipeById, updaterecipe } from '../Controllers/recipeController.js';

const router = express.Router();

router.post("/create",createrecipe)
router.get("/getrecipe",getAllrecipes)
router.get("/getrecipebyid/:id",getrecipeById)
router.put("/update/:id",updaterecipe)
router.delete("/delete/:id",deleterecipe)

export default router;