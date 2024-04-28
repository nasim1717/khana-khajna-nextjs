import Image from "next/image";

export default function RecipesCard() {
  return (
    <div class="card">
      <Image
        src="https://source.unsplash.com/-YHSwy6uqvk/300x160"
        class="rounded-md"
        alt="recipies"
        width={300}
        height={300}
      />
      <h4 class="my-2">Chef John&apos;s Turkey Sloppy Joes</h4>
      <div class="py-2 flex justify-between text-xs text-gray-500">
        <span>⭐️ 5.0</span>
        <span>By: John Doe</span>
      </div>
    </div>
  );
}
