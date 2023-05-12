'use client'

import Link from 'next/link';
import React,{useContext} from 'react';
import CardCart from './ui/card/cardCart';



import ImgFoodFirsh from "/public/assets/food1.png";


function CartList() {

  return (
      <div className="flex flex-col gap-6 p-6 mt-12">
          <div className="flex flex-row items-center justify-between">
            <p>
              <span>4</span> Itens
            </p>
            <Link
              href="/"
              className="bg-white py-2 px-5 text-xs rounded-3xl shadow-sm"
            >
              Add mais
            </Link>
          </div>
          <ul className="flex flex-col gap-4 mb-64">
            <li>
              <CardCart
                alt={"Image Lanches"}
                srcImage={ImgFoodFirsh}
                title={"Big Burger"}
                price={"7,59"}
              />
            </li>
            <li>
              <CardCart
                alt={"Image Lanches"}
                srcImage={ImgFoodFirsh}
                title={"Big Burger"}
                price={"7,59"}
              />
            </li>
            <li>
              <CardCart
                alt={"Image Lanches"}
                srcImage={ImgFoodFirsh}
                title={"Big Burger"}
                price={"7,59"}
              />
            </li>
            <li>
              <CardCart
                alt={"Image Lanches"}
                srcImage={ImgFoodFirsh}
                title={"Big Burger"}
                price={"7,59"}
              />
            </li>
            <li>
              <CardCart
                alt={"Image Lanches"}
                srcImage={ImgFoodFirsh}
                title={"Big Burger"}
                price={"7,59"}
              />
            </li>
            <li>
              <CardCart
                alt={"Image Lanches"}
                srcImage={ImgFoodFirsh}
                title={"Big Burger"}
                price={"7,59"}
              />
            </li>
            <li>
              <CardCart
                alt={"Image Lanches"}
                srcImage={ImgFoodFirsh}
                title={"Big Burger"}
                price={"7,59"}
              />
            </li>
            <li>
              <CardCart
                alt={"Image Lanches"}
                srcImage={ImgFoodFirsh}
                title={"Big Burger"}
                price={"7,59"}
              />
            </li>
            <li>
              <CardCart
                alt={"Image Lanches"}
                srcImage={ImgFoodFirsh}
                title={"Big Burger"}
                price={"7,59"}
              />
            </li>
            <li>
              <CardCart
                alt={"Image Lanches"}
                srcImage={ImgFoodFirsh}
                title={"Big Burger"}
                price={"7,59"}
              />
            </li>
            <li>
              <CardCart
                alt={"Image Lanches"}
                srcImage={ImgFoodFirsh}
                title={"Big Burger"}
                price={"7,59"}
              />
            </li>
            <li>
              <CardCart
                alt={"Image Lanches"}
                srcImage={ImgFoodFirsh}
                title={"Big Burger"}
                price={"7,59"}
              />
            </li>
            <li>
              <CardCart
                alt={"Image Lanches"}
                srcImage={ImgFoodFirsh}
                title={"Big Burger"}
                price={"7,59"}
              />
            </li>
          </ul>
      </div>
    )
}

export default CartList;