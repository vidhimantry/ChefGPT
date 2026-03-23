// Recipe Router
// Defines routes for recipe endpoints

import express from 'express';
import RecipeController from './recipeController.js';

const router = express.Router();

// Route: POST /api/getrecipe - Generate recipe from ingredients
router.post('/getrecipe', RecipeController.getRecipe);

// Route: GET /api/health - Health check
router.get('/health', RecipeController.healthCheck);

export default router;
