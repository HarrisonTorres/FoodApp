import Link from "next/link";

import CtaButtons from "../../../components/ui/buttons/ctaButton";

import { RiArrowLeftSLine, RiMore2Fill } from "react-icons/ri";

export const metadata = {
  title: "Carrinho dos lanaches",
  description: "Cardapio digital delivery Harrison Burgue",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className=" m-auto p-0 w-screen h-screen bg-orange-50">
        <nav className="m-auto py-2 w-full bg-orange-50 flex flex-row items-center justify-between fixed top-0 z-50 shadow-md">
          <div>
            <Link href="/">
              <RiArrowLeftSLine size={28}/>
            </Link>
          </div>
          <div className="text-2xl font-semibold">Meu carrinho</div>
          <div>
            <RiMore2Fill size={28} />
          </div>
        </nav>
        <section className="fixed bottom-0 w-full flex justify-center item-center rounded-t-3xl bg-white shadow-lg shadow-black z-50">
          <div className="flex flex-col w-full p-6 gap-2">
            <div className="flex flex-row justify-between text-lg font-normal">
              <p>Valor</p>
              <span className="text-base">
                R$<span className="font-semibold">59,80</span>
              </span>
            </div>
            <div className="flex flex-row justify-between">
              <p>Frete</p>
              <span className="text-base">Gratis</span>
            </div>
            <hr />
            <div className="flex flex-row justify-between">
              <p>Valor Total</p>
              <span className="text-orange-400 text-base">
                R$
                <span className="text-2xl text-black font-semibold">59,86</span>
              </span>
            </div>
            <div className="mt-8">
              <CtaButtons title="Finalizar pedido" />
            </div>
          </div>
        </section>
        <main className="container m-auto p-6 mt-12 mb-52">{children}</main>
      </body>
    </html>
  );
}
