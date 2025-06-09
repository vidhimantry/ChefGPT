import React, {useState, useEffect} from "react";
import { getRecipeFromMistral } from "../../ai"
import ReactMarkdown from "react-markdown";

export default function Content() {
  
   const [ingredients, setIngredients] = useState([])
   const [recipe, setRecipe] = React.useState("")

   const recipeSection = React.useRef(null);

   React.useEffect(() => {
    if (recipe && recipeSection.current) {
      recipeSection.current.scrollIntoView({ behavior: "smooth" });
    }}, [recipe]);
  
    const ingredientsList = ingredients.map(
      (ingredient, index) => (<li key={index}>{ingredient}</li>));

   function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    if (!newIngredient) return; 
    setIngredients(prevIngredients => 
      prevIngredients.includes(newIngredient) ? prevIngredients :
      [...prevIngredients, newIngredient]);
   }

   async function getRecipe() {
        const recipeMarkdown = await getRecipeFromMistral(ingredients);
        setRecipe(recipeMarkdown || "Sorry, no recipe could be generated.");
    }

  return (
    <main>

      <form className="input-form" action={addIngredient}>
        <input type="text" placeholder="e.g. cheese" name= "ingredient"
         aria-label="Add ingredient"/>
        <button className="add-button" type="submit">+ Add ingredient</button>
      </form>

      {ingredientsList.length > 0  && <section className="ingredient-section">
         <h2>Ingredients on hand:</h2>
      <ul>{ingredientsList}</ul>
       {ingredientsList.length > 2 && <div className="get-recipe">
        <h3>Ready for a recipe?</h3>
        <p>Click the button below to generate a recipe from your list of ingredients.</p>
      <button className="recipe-button" onClick={getRecipe} >Get a Recipe</button> 
      </div>}
      </section>}

      {recipe && typeof recipe === "string" && recipe.trim() !== "" && (
        <section aria-live="polite"
          className="suggested-recipe-section" ref={recipeSection}>
          <h2>ChefGPT Recommends</h2>
          <ReactMarkdown>{recipe}</ReactMarkdown>
        </section>
      )}

    </main> 
  ); 
}