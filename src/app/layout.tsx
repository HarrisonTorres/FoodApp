import Link from "next/link";
import "./globals.css";



import { RiShoppingBag3Line, RiHome5Line, RiMenuFill } from "react-icons/ri";

export const metadata = {
  title: "Harrison Burgue",
  description: "Cardapio digital delivery Harrison Burgue",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className=" m-auto p-0 w-full bg-orange-50 ">  
        
        <section className="fixed bottom-0 w-full h-16 flex justify-center item-center rounded-t-3xl bg-white shadow-lg shadow-orange-400 z-50">
          <nav className="flex flex-row justify-around w-full items-center">
            <Link href="/" id="home">
              <ul className="w-9 h-9 rounded-full bg-orange-400 flex justify-center items-center">
                <RiHome5Line size={18} color="white" />
              </ul>
            </Link>
            <Link href="./sections/bag">
              <ul className="w-9 h-9 rounded-full flex justify-center items-center">
                <RiShoppingBag3Line size={18} color="black" />
              </ul>
            </Link>
            <Link href="./sections/menu">
              <ul className="w-9 h-9 rounded-full flex justify-center items-center">
                <RiMenuFill size={18} color="black" />
              </ul>
            </Link>
          </nav>
        </section>
          <main>
              {children}
          </main>
      </body>
    </html>
  );
}
