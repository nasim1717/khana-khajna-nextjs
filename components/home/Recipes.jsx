import { getAllRecipes } from "@/app/action";
import NotFoundRecipe from "../NotFoundRecipe/NotFoundRecipe";
import RecipesCard from "../RecipesCard/RecipesCard";
import RecipesSidebar from "./RecipesSidebar";

export default async function Recipes() {
  let recipies = [];
  try {
    recipies = await getAllRecipes();
  } catch (error) {
    throw error;
  }

  let content = null;
  let sidebarList = [];
  if (recipies.length === 0) {
    content = <NotFoundRecipe />;
  } else {
    sidebarList = [...new Set(recipies?.map((category) => category?.category))];
    content = recipies?.map((recipe) => (
      <RecipesCard key={recipe._id.toString()} recipe={recipe} />
    ));
  }

  return (
    <section className="container py-8">
      <div className="grid grid-cols-12 py-4">
        <RecipesSidebar sidebarList={sidebarList} />
        <div className="col-span-12 md:col-span-9">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-8 justify-items-center">
            {content}
          </div>
        </div>
      </div>
    </section>
  );
}
