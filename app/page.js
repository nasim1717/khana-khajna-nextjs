import Loading from "@/components/Loading/Loading";
import HeroSection from "@/components/home/HeroSection";
import Recipes from "@/components/home/Recipes";
import { Suspense } from "react";

export const metadata = {
  title: "Khana-Khajna | Culinary Exploration Made Easy",
  description: 'Discover diverse recipes curated for every palate. Seamlessly navigate a world of culinary delights. Join a vibrant community of food enthusiasts.',
}


export default function HomePage() {
  return (
    <main>
      <Suspense fallback={<Loading />}>
        <HeroSection />
        <Recipes />
      </Suspense>

    </main>
  );
}
