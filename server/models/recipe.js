// Recipe Model
// Represents the structure of a Recipe object

export class Recipe {
  constructor(ingredients, recipe) {
    this.ingredients = ingredients;
    this.recipe = recipe;
    this.createdAt = new Date();
  }

  static validate(ingredients) {
    if (!Array.isArray(ingredients) || ingredients.length === 0) {
      throw new Error('Ingredients must be a non-empty array');
    }
    return true;
  }

  toString() {
    return `Recipe with ${this.ingredients.length} ingredients`;
  }
}

export default Recipe;
