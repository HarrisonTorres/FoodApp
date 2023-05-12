import React from 'react';
import Image from 'next/image';

import ButtonAddCart from './buttonAddCart';

<<<<<<< HEAD:src/app/sections/home/component/cardFood.tsx
import ImgFoodFirsh from "/public/assets/food1.png";

interface CardFoodProps{
    srcImage?: {}
    alt: string,
    title: string,
    subTitle: string,
    price: string,
    key: number,
    id: number
}

const CardListFoods: React.FC<CardFoodProps> = ({srcImage, alt, title, subTitle, price,id } ) => {

   
=======
function CardListFoods({srcImage, alt, title, subTitle, price, onClick} ) {
>>>>>>> 60c44ea368d212333b98bebd6b5e51edba036b4e:src/components/ui/card/cardListFoods.jsx
  return (
    <div className='w-full bg-white rounded-xl p-4 flex flex-row justify-center items-end shadow-lg'>
        <div className='flex flex-row items-end justify-between w-full gap-4' onClick={onClick}>
            <div className='flex flex-row items-center gap-4'>
                <Image
                        src={ImgFoodFirsh}
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
            </div>
<<<<<<< HEAD:src/app/sections/home/component/cardFood.tsx
            <ButtonAddCart id={id}/>
=======
            
>>>>>>> 60c44ea368d212333b98bebd6b5e51edba036b4e:src/components/ui/card/cardListFoods.jsx
        </div>
        <ButtonAddCart/>
    </div>
  )
}

export default CardListFoods;