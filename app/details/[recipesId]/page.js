import { getRecipeDetails } from "@/app/action";
import HowRecipesMake from "@/components/recipes-details/HowRecipesMake";
import RecipesDetails from "@/components/recipes-details/RecipesDetails";
import { notFound } from "next/navigation";


export async function generateMetadata({ params, searchParams }, parent) {

    const recipesId = params.recipesId;
    let recipeDetails = {};
    try {
        recipeDetails = await getRecipeDetails(recipesId)
    } catch (error) {
        notFound();
    }


    return {
        title: `khana-khajna | ${recipeDetails?.name}`,
        description: `${recipeDetails?.description?.slice(0, 100)}`,
        openGraph: {
            images: `${recipeDetails?.image}`,
        },
    }
}



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