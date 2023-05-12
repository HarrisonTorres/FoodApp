import Link from "next/link";
import React from "react";
import { RiMore2Fill } from "react-icons/ri";

import CtaButtons from "../../components/ui/buttons/ctaButton";
import VoltarButton from "../../components/ui/buttons/voltarButton";
import ListCartItems from "./sections/listCartItems";


export default function Bag() {

  

  return (
    <div className="m-auto p-0 w-full h-full bg-orange-50">
      <nav className="m-auto py-2 px-4 w-full bg-orange-50 flex flex-row items-center justify-between fixed top-0 z-50 shadow-md">
        <div>
          <VoltarButton />
        </div>
        <div className="text-2xl font-semibold">Meu carrinho</div>
        <div>
          <RiMore2Fill size={28} />
        </div>
      </nav>
      <div className="mt-6 mb-64 px-6">
        <ListCartItems />
      </div>
      <div className="fixed bottom-0 left-0 w-full flex justify-center item-center rounded-t-3xl bg-white  z-50">
        <div className="flex flex-col w-full px-6 py-4 gap-2">
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
      </div>
    </div>
  );
}
