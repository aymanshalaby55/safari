import Navigation from "@/app/_components/Navigation";
import Logo from "@/app/_components/Logo";
import "@/app/_styles/globals.css";
import {Josefin_Sans} from "next/font/google";
import Header from "./_components/Header";

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap"
});

export const metadata = {
  title: "The Wild Oasis", 
  description: "Luxurious cabin hotel, located in the heart of the Italian Dolomites, surrounded by beautiful mountains and dark forests"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${josefinSans.className} antialiased bg-primary-950 text-primary-100 min-h-screen flex flex-col`}>
       <Header />
       <div className="px-8 py-12 flex-1">
        <main className="max-w-7xl mx-auto ">{children}</main>
      </div>
      </body>
    </html>
  );
}
