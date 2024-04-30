"use client";
import Link from "next/link";
import { useParams } from "next/navigation";


export default function CategoryNotFound() {
    const params = useParams();
    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">&quot;{params?.categoryName}&quot; Recipe Not Found</h2>
            <p className="text-gray-600 mb-4">Could not find the requested resource.</p>
            <Link href="/">
                <h1 className="text-blue-500 hover:underline">Return Home</h1>
            </Link>
        </div>
    );
}