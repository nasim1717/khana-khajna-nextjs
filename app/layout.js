import Navbar from "@/components/header/Navbar";
import AuthProvider from "@/providers/AuthProvider";
import { Poppins } from "next/font/google";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], display: "swap", weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });

export const metadata = {
  title: "khana | Khazana App",
  description: "Discover diverse recipes curated for every palate. Seamlessly navigate a world of culinary delights. Join a vibrant community of food enthusiasts.",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en" >
      <body className={poppins.className}>
        <AuthProvider>
          <Navbar />
          {children}
          <ToastContainer />
        </AuthProvider>
      </body>
    </html>
  );
}
