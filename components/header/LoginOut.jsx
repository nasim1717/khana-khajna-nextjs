"use client";
import { AuthConetxt } from "@/contexts";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext } from "react";

export default function LoginOut() {
  const { auth, setAuth } = useContext(AuthConetxt);
  const router = useRouter();
  const handleLogOut = () => {
    setAuth(null);
    router.push("/login");
  };
  return (
    <li className="py-2 bg-[#eb4a36] px-6 rounded-md text-white content-center">
      {auth?.email ? (
        <span onClick={handleLogOut} className="cursor-pointer">
          Log Out
        </span>
      ) : (
        <Link href="/login">Login</Link>
      )}
    </li>
  );
}
