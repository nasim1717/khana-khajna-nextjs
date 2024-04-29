import { getRecipeDetails } from "@/app/action";
import HowRecipesMake from "@/components/recipes-details/HowRecipesMake";
import RecipesDetails from "@/components/recipes-details/RecipesDetails";
import { notFound } from "next/navigation";

export default async function RecipesDetailsPage({ params: { recipesId } }) {
    let recipeDetails = {};
    try {
        recipeDetails = await getRecipeDetails(recipesId)
    } catch (error) {
        notFound();
    }
    return (
        <main>
            <RecipesDetails recipeDetails={recipeDetails} />
            <HowRecipesMake recipeSteps={recipeDetails?.steps} />
        </main>
    );
}