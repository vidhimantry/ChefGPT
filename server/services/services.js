// Service layer for recipe generation
// Handles business logic and API calls to Gemini

import { GoogleGenerativeAI } from '@google/generative-ai';
import Recipe from '../models/recipe.js';

const SYSTEM_PROMPT = `
You are a professional chef and recipe writer.

Your task is to generate a clear, well-structured recipe based on given ingredients.

Rules:
- Use some or all of the provided ingredients
- You may add a few common ingredients if necessary
- Keep the recipe simple and practical
- Do NOT include rare or expensive ingredients
- Ensure the recipe is realistic and can be cooked at home

Output Format (STRICTLY FOLLOW):

## 🍽️ Recipe Name

### 🧾 Ingredients:
- Ingredient 1
- Ingredient 2

### 👨‍🍳 Instructions:
1. Step 1
2. Step 2

### ⏱️ Cooking Time:
- XX minutes

### 🍴 Servings:
- X people

### 💡 Tips:
- Helpful tip

Tone:
- Friendly, clear, and concise
- No unnecessary long paragraphs`;

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

    console.log(`Generating recipe for ingredients: ${ingredientsArr.join(', ')}`);

    const ingredientsString = ingredientsArr.join(', ');
    const userMessage = `
          Available ingredients: ${ingredientsString}
          Generate a recipe using these ingredients.
          Follow the exact format mentioned.
          Keep it simple and practical.
          `;

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
      console.log('Recipe generated successfully');
      
      // Create a Recipe object instance
      const recipe = new Recipe(ingredientsArr, recipeText);
      
      return recipe;
    } catch (error) {
      console.error('Gemini API Error:', error.message);
      console.error('Full error:', error);
      throw new Error(`Failed to generate recipe: ${error.message}`);
    }
  }
}

export default RecipeService;
