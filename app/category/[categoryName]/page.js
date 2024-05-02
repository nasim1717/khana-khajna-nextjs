import Loading from "@/components/Loading/Loading";
import Category from "@/components/category/Category";
import { Suspense } from "react";

export async function generateMetadata({ params, searchParams }, parent) {
    const categoryName = decodeURIComponent(params.categoryName);

    return {
        title: `khana-khajna | ${categoryName}`,
        description: "Dive into a world of flavors with our diverse recipe categories. From comforting classics to exotic cuisines, find your next culinary adventure here."
    }
}

export default function CategoryPage({ params: { categoryName } }) {
    categoryName = decodeURIComponent(categoryName);
    return (
        <>
            <Suspense fallback={<Loading />}>
                <Category categoryName={categoryName} />
            </Suspense>

        </>
    );
}