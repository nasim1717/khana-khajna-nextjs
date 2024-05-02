import Link from "next/link";



export default function RootNotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <p className="text-gray-600 mb-4">Page not find the requested resource.</p>
            <Link href="/">
                <h1 className="text-blue-500 hover:underline">Return Home</h1>
            </Link>
        </div>
    );
}