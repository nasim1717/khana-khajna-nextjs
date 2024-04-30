import { getCategoryRecipe } from "@/app/action";
import { notFound } from "next/navigation";
import RecipesCard from "../RecipesCard/RecipesCard";
export default async function Category({ categoryName }) {
  let content = null;
  try {
    const category = await getCategoryRecipe(categoryName);
    if (category.length === 0) {
      notFound();
    } else {
      content = category?.map((recipe) => (
        <RecipesCard key={recipe?._id.toString()} recipe={recipe} />
      ));
    }
  } catch (error) {
    throw error;
  }
  return (
    <main>
      <section className="container py-8">
        <div>
          <h3 className="font-semibold text-xl">{categoryName}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-8 justify-items-center">
            {content}
          </div>
        </div>
      </section>
    </main>
  );
}
