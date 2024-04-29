export default function HowRecipesMake({ recipeSteps }) {
  const steps = recipeSteps.map((step, index) => (
    <div key={index} className="step">
      <h3>Step {index + 1}</h3>
      <p>{step}</p>
    </div>
  ));

  return (
    <section>
      <div className="container py-12">
        <h3 className="font-semibold text-xl py-6">How to Make it</h3>
        <div>{steps}</div>
      </div>
    </section>
  );
}
