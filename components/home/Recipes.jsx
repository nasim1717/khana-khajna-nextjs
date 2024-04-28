import RecipesCard from "../RecipesCard/RecipesCard";
import RecipesSidebar from "./RecipesSidebar";

export default function Recipes() {
  return (
    <section class="container py-8">
      <div class="grid grid-cols-12 py-4">
        <RecipesSidebar />
        <div class="col-span-12 md:col-span-9">
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-8 justify-items-center">
            <RecipesCard />
          </div>
        </div>
      </div>
    </section>
  );
}
