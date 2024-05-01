"use server"
import { createUsersFromDb, findUserFromDb, getCategoryRecipeFromDb, getRecipeDetailsFromDb, getRecipesFromDb } from "@/dbConnect/query";

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

async function getCategoryRecipe(categoryName) {
    try {
        const recipeCategory = await getCategoryRecipeFromDb(categoryName);
        return recipeCategory;
    } catch (error) {
        throw error;
    }
}

async function createUsers(userData) {
    let message = {};
    try {
        const isExistUser = await findUser(userData?.email)
        if (!isExistUser) {
            await createUsersFromDb(userData);
            message = { success: true }
        } else {
            message = { success: false, email: "Email already exist" }
        }
        return message;

    } catch (error) {
        throw error;
    }
}

async function findUser(userEmail) {
    try {
        return await findUserFromDb(userEmail);
    } catch (error) {
        throw error;
    }
}

export { createUsers, getAllRecipes, getCategoryRecipe, getRecipeDetails };

