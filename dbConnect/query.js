import { recipesModel } from "@/models/recipes-models";
import { usersModel } from "@/models/users-models";
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
    return recipeCategory;
}


async function createUsersFromDb(userData) {
    await connectMongo();
    const userCreate = await usersModel.create(userData);
    return userCreate;
}

async function findUserFromDb(userEmail) {
    await connectMongo();
    const user = await usersModel.findOne({ email: userEmail });
    return user;
}

async function userLogin(loginData) {
    await connectMongo();
    const loginUser = await usersModel.findOne({ email: loginData.email, password: loginData.password }).lean();
    return loginUser;
}

async function updateFavourite(recipeId, authId) {
    await connectMongo();
    const message = {};
    const findRecipe = await recipesModel.findById(recipeId);
    const findUser = findRecipe?.favourites?.find(id => id === authId);
    if (findUser) {
        findRecipe.favourites.pull(authId);
        message.isFavourite = false;
    } else {
        findRecipe.favourites.push(authId);
        message.isFavourite = true;
    }
    findRecipe.save();
    return message;
}

export {
    createUsersFromDb, findUserFromDb, getCategoryRecipeFromDb,
    getRecipeDetailsFromDb,
    getRecipesFromDb, updateFavourite, userLogin
};

