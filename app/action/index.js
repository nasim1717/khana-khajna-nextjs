"use server"
import { getRecipesFromDb } from "@/dbConnect/query";

async function getAllRecipes() {
    try {
        const recipes = await getRecipesFromDb();
        return recipes;
    } catch (error) {
        throw error;
    }
}

export { getAllRecipes };

