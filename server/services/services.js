// Service layer for recipe generation
// Handles business logic and API calls to Gemini

import { GoogleGenerativeAI } from '@google/generative-ai';
import Recipe from '../models/recipe.js';

const SYSTEM_PROMPT = `You are an assistant that receives a list of ingredients that a user has 
and suggests a recipe they could make with some or all of those ingredients. You don't need to 
use every ingredient they mention in your recipe. The recipe can include additional ingredients 
they didn't mention, but try not to include too many extra ingredients. Format your response in 
markdown to make it easier to render to a web page. Begin with something like this - Based on the
list of ingredients provided, here is a recipe you can make:`;

export class RecipeService {
  static async generateRecipe(ingredientsArr) {
    // Validate input
    Recipe.validate(ingredientsArr);

    // Check for API key
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.error('Error: GEMINI_API_KEY is not set in environment variables');
      throw new Error('Gemini API key is not configured. Please set GEMINI_API_KEY in .env');
    }

    console.log(`🔄 Generating recipe for ingredients: ${ingredientsArr.join(', ')}`);

    const ingredientsString = ingredientsArr.join(', ');
    const userMessage = `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!`;

    try {
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });

      const result = await model.generateContent({
        contents: [
          {
            role: 'user',
            parts: [{ text: SYSTEM_PROMPT + '\n\n' + userMessage }],
          },
        ],
      });

      const recipeText = result.response.text();
      console.log('✅ Recipe generated successfully');
      
      // Create a Recipe object instance
      const recipe = new Recipe(ingredientsArr, recipeText);
      
      return recipe;
    } catch (error) {
      console.error('❌ Gemini API Error:', error.message);
      console.error('Full error:', error);
      throw new Error(`Failed to generate recipe: ${error.message}`);
    }
  }
}

export default RecipeService;
