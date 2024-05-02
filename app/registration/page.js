
import RegisterForm from "@/components/auth/RegisterForm";
import Link from "next/link";

export const metadata = {
    title: "khana-Khazana | Registration",
    description: "Register now to access a world of recipes and connect with fellow foodies. Start your culinary journey with Khana-Khajna today!",
};

export default function RegistrationPage() {
    return (
        <main className="">
            <section className="h-screen grid place-items-center">
                <div className="max-w-[450px] w-full mx-auto p-6 border border-gray-700/20 rounded-md">
                    <h4 className="font-bold text-2xl">Sign Up</h4>
                    <RegisterForm />
                    <p className="text-center text-xs text-gray-600">Or</p>
                    <Link href="/login" className="underline text-sm mx-auto block text-gray-600 mt-4 text-center">
                        Login
                    </Link>

                </div>
            </section>
        </main>
    );
}