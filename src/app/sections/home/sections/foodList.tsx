"use client";
import { CartProvider } from "@/app/contexts/cartContext";
import React from "react";

import { dados_lanches } from "../../../../../database/api_fake";
import CardListFoods from "../component/cardFood";
import ImgFoodFirsh from "/public/assets/food1.png";

const FoodList: React.FC = () => {
  return (
    <CartProvider>
      <div className="flex flex-col gap-4">
        {dados_lanches.map((item) => (
          <CardListFoods
            key={item.id}
            alt={item.alt_image}
            srcImage={ImgFoodFirsh}
            title={item.title_itens}
            subTitle={item.descrition_from_itens}
            price={item.price}
            id={item.id}
          />
        ))}
      </div>
    </CartProvider>
  );
};

export default FoodList;
