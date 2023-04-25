import React from "react";
import CardListFoods from "./ui/card/cardListFoods";

import ImgFoodFirsh from "/public/assets/food1.png";

function FoodList() {
  

  return (
    <div className="flex flex-col gap-4">
      <CardListFoods
        alt={"Image Lanches"}
        srcImage={ImgFoodFirsh}
        title={"Big Burger"}
        subTitle={"2 hamburguer, alface, cebola, pliques e um pão com gergilim"}
        price={"7,59"}
      />
      <CardListFoods
        alt={"Image Lanches"}
        srcImage={ImgFoodFirsh}
        title={"Big Burger"}
        subTitle={"2 hamburguer, alface, cebola, pliques e um pão com gergilim"}
        price={"7,59"}
      />
      <CardListFoods
        alt={"Image Lanches"}
        srcImage={ImgFoodFirsh}
        title={"Big Burger"}
        subTitle={"2 hamburguer, alface, cebola, pliques e um pão com gergilim"}
        price={"7,59"}
      />
      <CardListFoods
        alt={"Image Lanches"}
        srcImage={ImgFoodFirsh}
        title={"Big Burger"}
        subTitle={"2 hamburguer, alface, cebola, pliques e um pão com gergilim"}
        price={"7,59"}
        
      />
    </div>
  );
}

export default FoodList;
