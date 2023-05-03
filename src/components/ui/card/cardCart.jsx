import Image from "next/image";
import React from "react";


//Ui Components
import CartAddOrDelete from '../buttons/cartAddOrDelete'

function CardCart({ srcImage, alt, title, subTitle, price }) {
  return (
    <div className="w-full h-24 bg-white rounded-xl py-3 px-6 flex flex-row justify-around items-center  shadow-lg"> 
      <div className="flex flex-row items-center justify-around w-full">
        <Image
            src={srcImage}
            alt={alt}
            width={64}
            height={64}
            className="rounded-lg z-10 "
          />
        <div className="flex flex-col">
          <h2 className="text-lg font-semibold">{title}</h2>
          <div className="flex flex-row items-end">
            <span className="text-base font-semibold text-orange-400">R$</span>
            <p className="text-lg font-normal">{price}</p>
          </div>
        </div>
        <div>
          <CartAddOrDelete />
        </div>
      </div>
    </div>
  );
}

export default CardCart;
