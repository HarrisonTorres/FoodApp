'use client'
import React, { useState } from "react";
import { RiAddLine, RiSubtractLine } from "react-icons/ri"

//BOTÕES DE ADICIONAR E DELETAR QUANTIDADES DE UNICO ITENS NO CARRINHO
import {dados_lanches} from '../../../../database/api_fake'
function CartAddOrDelete() {
  const test = dados_lanches.lancheName

    const [itens, setItens] = useState(1);

    const AddItens = () => {
        setItens(itens + 1);
        console.log(test)
    }
    const DeleteItens = () => {
        setItens(itens - 1)
    }
  return (
    <div className="flex flex-row py-1 px-2 bg-orange-400 rounded-2xl gap-3 justify-center items-center">
      <div>
        <button onClick={DeleteItens}>
          <RiSubtractLine size={14} color="white" />
        </button>
      </div>
      <span className="text-white font-light">{itens}</span>
      <div className="flex items-center justify-center">
        <button onClick={AddItens} >
          <RiAddLine size={18} color="white" className="m-auto"/>
        </button>
      </div>
    </div>
  );
}

export default CartAddOrDelete;
