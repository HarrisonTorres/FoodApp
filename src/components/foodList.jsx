'use client'
import React from "react";
import CardListFoods from "./ui/card/cardListFoods";

import ImgFoodFirsh from "/public/assets/food1.png";

import { dados_lanches } from "../../database/api_fake";

function FoodList() {
  
  return (
    <div className="flex flex-col gap-4">
      {dados_lanches.map((item) => <CardListFoods
        key={item.id}
        alt={item.alt_image}
        srcImage={ImgFoodFirsh}
        title={item.title_itens}
        subTitle={item.descrition_from_itens}
        price={item.price}
      />)}
    </div>
  );
}

export default FoodList;
