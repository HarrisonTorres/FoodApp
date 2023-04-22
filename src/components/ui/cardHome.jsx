import React from 'react';
import Image from "next/image";

function CardHome({srcImage, alt, title, subTitle, price}) {

  return (
    <div className="flex flex-col items-center w-32 h-56 pb-4">
          <Image
            src={srcImage}
            alt={alt}
            width={80}
            height={80}
            className="rounded-lg z-10"
          />
          <div className="w-32 h-40 bg-white -mt-10 rounded-xl pt-10 flex flex-col justify-center items-center gap-1 shadow-lg">
            <h2 className="text-xs font-semibold">{title}</h2>
            <p className="text-xs font-extralight text-gray-400">{subTitle}</p>
            <div className="flex flex-row items-end">
              <span className="text-base font-semibold text-orange-400">
                R$
              </span>
              <p className="text-2xl font-semibold">{price}</p>
            </div>
          </div>
    </div>
    )
}
export default CardHome;