import React from "react";
import { ListFormat } from "typescript";

import { dados_lanches } from "../../database/api_fake";

const categoriasConverce = [
  {
    1: 'Hamburguer',
    2: 'Pizza',
    3: 'Bebida',
    4: 'Doce'
  }
]

export default function Category() {
  return (
    <div className="flex flex-col items-start gap-4 w-full " id="category">
      <div className="">
        <h3 className="text-base font-medium">Categorias</h3>
      </div>
      <div className="flex w-full">
        <ul className="flex flex-row gap-2 overflow-scroll pb-3">

          {dados_lanches.map((item) =>(
              <li className="py-2 px-3 bg-orange-400 shadow-md shadow-orange-300 rounded-3xl flex flex-row item-center justify-center gap-2 cursor-pointer">
                <div className="w-7 h-7 rounded-full bg-white"></div>
                <p className="text-white text-xs font-medium m-auto">
                {item.category}
                </p>
              </li>
            ))
          }

        </ul>
      </div>
    </div>
  );
}
