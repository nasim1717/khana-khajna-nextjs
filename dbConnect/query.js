import { recipesModel } from "@/models/recipes-models";
import connectMongo from "./connectMogno";

async function getRecipesFromDb() {
    await connectMongo();
    const recipes = await recipesModel.find()
    return recipes;
}

export {
    getRecipesFromDb
};

