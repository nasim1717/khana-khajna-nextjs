import Image from "next/image";
import AboutRecipes from "./AboutRecipes";
import RecipeSocialShare from "./RecipeSocialShare";
import RecipesFavourite from "./RecipesFavourite";

export default function RecipesDetails() {
  return (
    <section>
      <div className="grid grid-cols-12 container gap-8 justify-items-center">
        <div className="col-span-12 md:col-span-6">
          <Image
            src="https://source.unsplash.com/Zh0mYmMBZjQ/600x600"
            alt="recipe"
            width={600}
            height={300}
            className="w-full h-full rounded-lg object-contain"
          />
        </div>
        <div className="col-span-12 md:col-span-6 py-8 flex flex-col justify-center">
          <AboutRecipes />
          <div className="flex gap-4 justify-end">
            <RecipesFavourite />
            <RecipeSocialShare />
          </div>
        </div>
      </div>
    </section>
  );
}
