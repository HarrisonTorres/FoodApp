import Image from "next/image";
import React from "react";
import { RiAddLine, RiSubtractLine } from "react-icons/ri";

function CardCart({ srcImage, alt, title, subTitle, price }) {
  return (
    <div className="w-full h-28 bg-white rounded-xl py-3 px-6 flex flex-row justify-around items-center  shadow-lg"> 
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
        <div className="flex flex-row py-1 px-2 bg-orange-400 rounded-2xl gap-3 justify-center items-center">
          <div>
            <a href="#">
              <RiSubtractLine size={14} color="white"/>
            </a>
          </div>
          <span className="text-white font-light">1</span>
          <div>
            <a href="#">
              <RiAddLine size={18} color="white"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardCart;
