"use server"
import { getRecipeDetailsFromDb, getRecipesFromDb } from "@/dbConnect/query";

async function getAllRecipes() {
    try {
        const recipes = await getRecipesFromDb();
        return recipes;
    } catch (error) {
        throw error;
    }
}

async function getRecipeDetails(recipeId) {
    try {
        const singleRecipe = await getRecipeDetailsFromDb(recipeId);
        return singleRecipe
    } catch (error) {
        throw error;
    }
}

export { getAllRecipes, getRecipeDetails };

