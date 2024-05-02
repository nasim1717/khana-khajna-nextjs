import Image from "next/image";
import AboutRecipes from "./AboutRecipes";
import RecipeSocialShare from "./RecipeSocialShare";
import RecipesFavourite from "./RecipesFavourite";

export default function RecipesDetails({ recipeDetails }) {
  return (
    <section>
      <div className="grid grid-cols-12 container gap-8 justify-items-center">
        <div className="col-span-12 md:col-span-6">
          <Image
            src={recipeDetails?.thumbnail}
            alt={recipeDetails?.name}
            width={600}
            height={300}
            className="w-full h-full rounded-lg object-contain"
          />
        </div>
        <div className="col-span-12 md:col-span-6 py-8 flex flex-col justify-center">
          <AboutRecipes recipeDetails={recipeDetails} />
          <div className="flex gap-4 justify-end">
            <RecipesFavourite recipeDetails={recipeDetails} />
            <RecipeSocialShare recipeDetails={recipeDetails} />
          </div>
        </div>
      </div>
    </section>
  );
}
