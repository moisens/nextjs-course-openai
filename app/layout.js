import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next js + openAi",
  description: "Reviewing nextjs + learning nextjs 14 + openAi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-base-200">
      <body className={inter.className}>
        <Navbar />
        <main className="px-8 py-20 max-w-6xl mx-auto ">{children}</main>
      </body>
    </html>
  );
}
