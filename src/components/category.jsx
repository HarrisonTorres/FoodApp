import React from "react";
import { ListFormat } from "typescript";

export default function Category() {
  return (
    <div className="flex flex-col items-start gap-4 w-full">
      <div className="">
        <h3 className="text-base font-medium">Categorias</h3>
      </div>
      <div className="flex w-full">
        <ul className="flex flex-row gap-2 overflow-scroll pb-3">
          <li className="py-2 px-3 bg-orange-400 shadow-md shadow-orange-300 rounded-3xl flex flex-row item-center justify-center gap-2 cursor-pointer">
            <div className="w-7 h-7 rounded-full bg-white"></div>
            <p className="text-white text-xs font-medium m-auto">Hamburguer</p>
          </li>
          <li className="py-2 px-3 bg-white shadow-sm shadow-black-200 rounded-3xl flex flex-row item-center justify-center gap-2 cursor-pointer">
            <div className="w-7 h-7 rounded-full bg-white"></div>
            <p className="text-black text-xs font-medium m-auto">Pizza</p>
          </li>
          <li className="py-2 px-3 bg-white shadow-sm shadow-black-200 rounded-3xl flex flex-row item-center justify-center gap-2 cursor-pointer">
            <div className="w-7 h-7 rounded-full bg-white"></div>
            <p className="text-black text-xs font-medium m-auto">Bebidas</p>
          </li>
          <li className="py-2 px-3 bg-white shadow-sm shadow-black-200 rounded-3xl flex flex-row item-center justify-center gap-2">
            <div className="w-7 h-7 rounded-full bg-white"></div>
            <p className="text-black text-xs font-medium m-auto">Sobremesas</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
