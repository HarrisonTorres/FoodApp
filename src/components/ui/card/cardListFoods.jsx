import React from 'react';
import Image from 'next/image';

import ButtonAddCart from '../buttons/buttonAddCart';



function CardListFoods({srcImage, alt, title, subTitle, price} ) {
  return (
    <div className='w-full h-28 bg-white rounded-xl p-4 flex flex-row justify-center items-center shadow-lg'>
        <div className='flex flex-row items-end justify-between w-full gap-4'>
            <Image
                    src={srcImage}
                    alt={alt}
                    width={80}
                    height={80}
                    className="rounded-lg z-10 w-20 h-20"
            />
            <div className='flex flex-col gap-1 overflow-hidden'>
                <h2 className="text-base font-semibold">{title}</h2>
                <p className="text-xs font-extralight text-gray-400">{subTitle}</p>
                <div className="flex flex-row items-end">
                    <span className="text-base font-semibold text-orange-400">
                        R$
                    </span>
                    <p className="text-xl font-semibold">{price}</p>
                </div>
            </div>
            <ButtonAddCart/>
        </div>
    </div>
  )
}

export default CardListFoods;