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

export {
    getRecipeDetailsFromDb,
    getRecipesFromDb
};

