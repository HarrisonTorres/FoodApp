"use client";
import React, { useContext, useState } from "react";
import CardCart from "./ui/cardCart";

import ImgFoodFirsh from "/public/assets/food1.png";


import { CartContext } from "../../../contexts/cartContext";
import Link from "next/link";

function ServiceListCart() {

  const { cart, quantityItens } = useContext(CartContext);

  const {removeCart, addCart} = useContext(CartContext);

  const [countItens, setCountItens] = useState(1);

  const AddItens = (item) => {
    addCart(item)
  };

  const DeleteItens = (item) => {
    removeCart(item);
  };

  const key = function gerarChaveAleatoria() {
    const timestamp = new Date().getTime(); // Obtém o timestamp atual
    const chaveAleatoria = `${timestamp}_${Math.random()}`; // Combina o timestamp com um valor aleatório
    return chaveAleatoria;
  }

  return (
    <>
    <div className="mt-16 px-6 flex flex-row justify-between">
        <p>
          <span>{quantityItens}</span> Itens
        </p>
        <Link
          href="/"
          className="bg-white py-2 px-5 text-xs rounded-3xl shadow-sm"
        >
          Add mais
        </Link>
      </div>
    <div className="flex flex-col gap-4">
      {cart.map((item) =>(
        <CardCart
          key={key}
          alt={item.alt_image}
          srcImage={ImgFoodFirsh}
          title={item.title_itens}
          price={item.price}
          AddItens={() => AddItens(item.id)}
          DeleteItens={() => DeleteItens(item.id)}
        />
      ))}
    </div>
    </>
  );
}

export default ServiceListCart;
