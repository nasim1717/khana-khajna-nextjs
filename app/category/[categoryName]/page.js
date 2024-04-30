import Category from "@/components/category/Category";
export default function CategoryPage({ params: { categoryName } }) {
    categoryName = decodeURIComponent(categoryName);
    return (
        <>
            <Category categoryName={categoryName} />
        </>
    );
}