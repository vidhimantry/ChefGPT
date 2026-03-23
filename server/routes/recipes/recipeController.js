// Recipe Controller
// Handles HTTP requests and responses

import RecipeService from '../../services/services.js';

export class RecipeController {
  static async getRecipe(req, res) {
    try {
      const { ingredients } = req.body;

      if (!ingredients || !Array.isArray(ingredients) || ingredients.length === 0) {
        return res.status(400).json({
          success: false,
          error: 'Please provide an array of ingredients',
        });
      }

      // Call service to generate recipe
      const recipe = await RecipeService.generateRecipe(ingredients);

      return res.status(200).json({
        success: true,
        recipe: recipe.recipe,
        ingredientsUsed: recipe.ingredients,
        createdAt: recipe.createdAt,
      });
    } catch (error) {
      console.error('Recipe Controller Error:', error);
      return res.status(500).json({
        success: false,
        error: error.message || 'Failed to generate recipe',
      });
    }
  }

  static async healthCheck(req, res) {
    return res.status(200).json({
      success: true,
      status: 'Server is running',
      timestamp: new Date().toISOString(),
    });
  }
}

export default RecipeController;
