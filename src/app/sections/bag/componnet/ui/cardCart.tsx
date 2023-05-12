import Image from "next/image";
import React, { useContext } from "react";

import ImgFoodFirsh from "/public/assets/food1.png";
//Ui Components
import CartAddOrDelete from './cartAddOrDelete'


interface CardCartProps {
  price?: string,
  title?: string,
  srcImage?:any,
  alt: string,
  AddItens?: any,
  DeleteItens?: Function
}

const CardCart: React.FC<CardCartProps> = ({ srcImage, title, price,alt, DeleteItens, AddItens }) => {

  

  return (
    <div className="w-full h-24 bg-white rounded-xl py-3 px-6 flex flex-row items-center shadow-md"> 
      <div className="flex flex-row items-center gap-4 w-full">
        <Image
            alt={alt}
            src={srcImage}
            width={64}
            height={64}
            className="rounded-lg z-10 "
          />
        <div className="flex flex-col items-start">
          <h2 className="text-sm font-semibold">{title}</h2>
          <div className="flex flex-row items-center">
            <span className="text-sm font-semibold text-orange-400">R$</span>
            <p className="text-sm font-normal">{price}</p>
          </div>
        </div>
      </div>
      <div>
          <CartAddOrDelete DeleteItens={DeleteItens} AddItens={AddItens}/>
        </div>
    </div>
  );
}

export default CardCart;
