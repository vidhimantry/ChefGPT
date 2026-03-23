export async function getRecipeFromGemini(ingredientsArr) {
  try {
    const response = await fetch("https://chefgpt-7k1n.onrender.com/api/getrecipe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ingredients: ingredientsArr }),
    });

    if (!response.ok) {
      throw new Error(`Serverless Function Error: ${response.statusText}`);
    }

    const data = await response.json();
    return data.recipe;
  } catch (err) {
    console.error(`Error: ${err.message}`);
    return "An error occurred while fetching the recipe. Please try again.";
  }
}