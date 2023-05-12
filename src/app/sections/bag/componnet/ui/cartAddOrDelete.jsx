'use client'
import React from "react";
import { RiAddLine, RiSubtractLine } from "react-icons/ri";

function CartAddOrDelete({ AddItens, DeleteItens }) {
  function chamarDelete() {
    DeleteItens();
  }

  function chamarAdd() {
    AddItens();
  }

  return (
    <div className="flex flex-row py-1 px-2 bg-orange-400 rounded-2xl gap-3 justify-center items-center">
      <button onClick={chamarDelete}>
        <RiSubtractLine size={14} color="white" />
      </button>
      <span className="text-white font-light">1</span>
      <button onClick={chamarAdd} className="flex items-center justify-center">
        <RiAddLine size={18} color="white" className="m-auto" />
      </button>
    </div>
  );
}

export default CartAddOrDelete;