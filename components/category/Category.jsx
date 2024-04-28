import RecipesCard from "../RecipesCard/RecipesCard";
export default function Category() {
  return (
    <main>
      <section class="container py-8">
        <div>
          <h3 class="font-semibold text-xl">Appetizers & Snacks</h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-8 justify-items-center">
            <RecipesCard />
          </div>
        </div>
      </section>
    </main>
  );
}
