import { GoogleGenAI } from "@google/genai";

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page.Begin with something like this - Based on the
list of ingredients provided, here is a recipe you can make:
`;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Only POST requests are allowed" });
    return;
  }

  const { ingredients } = req.body;

  if (!ingredients || !Array.isArray(ingredients)) {
    res.status(400).json({ error: "Invalid ingredients format" });
    return;
  }

  const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY, // Securely access the key
  });

  const ingredientsString = ingredients.join(", ");
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: `${SYSTEM_PROMPT}\nI have ${ingredientsString}. Please give me a recipe you'd recommend I make!`,
    });

    res.status(200).json({ recipe: response.text });
  } catch (err) {
    res.status(500).json({ error: `Gemini API Error: ${err.message}` });
  }
}