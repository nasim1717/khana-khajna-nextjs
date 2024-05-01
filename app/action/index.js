"use server"
import { createUsersFromDb, findUserFromDb, getCategoryRecipeFromDb, getRecipeDetailsFromDb, getRecipesFromDb, updateFavourite, userLogin } from "@/dbConnect/query";
import { revalidatePath } from "next/cache";

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

async function performLogin(loginData) {
    let message = {};
    try {
        const user = await userLogin(loginData);
        if (user) {
            message = { success: true, message: "successfully login", user: user }
        } else {
            const isEmailCorrect = await findUser(loginData?.email);
            if (isEmailCorrect) {
                message = { success: false, password: "Please Enter your correct password" }
            } else {
                message = { success: false, email: "Your gmail was not found" }
            }
        }
        return message;
    } catch (error) {
        throw error
    }
}

async function addFavourites(recipeId, authId) {
    try {
        const response = await updateFavourite(recipeId, authId);
        revalidatePath(`/details/${recipeId}`);
        return response;
    } catch (error) {
        throw error;
    }
}

export { addFavourites, createUsers, getAllRecipes, getCategoryRecipe, getRecipeDetails, performLogin };

