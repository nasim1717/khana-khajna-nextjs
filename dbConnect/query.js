import { recipesModel } from "@/models/recipes-models";
import mongoose from "mongoose";
import connectMongo from "./connectMogno";

async function getRecipesFromDb() {
    await connectMongo();
    const recipes = await recipesModel.find()
    return recipes;
}

async function getRecipeDetailsFromDb(recipeId) {
    await connectMongo();
    const recipe = await recipesModel.findOne({ _id: new mongoose.Types.ObjectId(recipeId) })
    return recipe;
}

async function getCategoryRecipeFromDb(categoryName) {
    await connectMongo();
    const recipeCategory = await recipesModel.find({ category: categoryName });
    console.log("recipeCategory DB-->", recipeCategory);
    return recipeCategory;
}

export {
    getCategoryRecipeFromDb,
    getRecipeDetailsFromDb,
    getRecipesFromDb
};

