import Image from "next/image";
import Link from "next/link";

export default function RecipesCard({ recipe }) {
  return (
    <Link href={`/details/${recipe?._id.toString()}`}>
      <div className="card">
        <Image
          src={recipe?.thumbnail}
          className="rounded-md"
          alt={recipe?.name}
          width={600}
          height={300}
        />
        <h4 className="my-2">{recipe?.name}</h4>
        <div className="py-2 flex justify-between text-xs text-gray-500">
          <span>⭐️ {recipe?.rating}</span>
          <span>By: {recipe?.author}</span>
        </div>
      </div>
    </Link>
  );
}
