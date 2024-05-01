import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/images/logo.png";
import LoginOut from "./LoginOut";

export default function Navbar() {
  return (
    <nav>
      <div className="container flex justify-between py-6 ">
        <Link href="/">
          <div className="h-[40px] w-[122.22px] relative">
            <Image fill src={Logo} alt="Logo" className="object-cover" />
          </div>
        </Link>

        <ul className="flex gap-4 text-sm text-gray-500">
          <li className="py-2 active">
            <Link href="/">Home</Link>
          </li>

          <li className="py-2">
            <Link href="/">Recipe</Link>
          </li>

          <li className="py-2">
            <Link href="/">About us</Link>
          </li>

          <LoginOut />
        </ul>
      </div>
    </nav>
  );
}
