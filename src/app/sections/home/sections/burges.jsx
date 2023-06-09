import React from "react";
import Link from "next/link";
import { RiArrowRightSLine } from "react-icons/ri";

//UI

import SubTitleSection from "../../../components/ui/subTitleSection"

//images
import ImgFoodFirsh from "/public/assets/food1.png";
import CardDestaque from "../../../components/ui/card/cardDestaque";

function Burges() {
  return (
    <div>
      <div className="flex flex-row justify-between items-center">
        <SubTitleSection subTitle={'Pupulares'}/>
        <Link
          href={"./"}
          alt='Icon'
          className="flex flex-row justify-end items-center text-xs font-medium text-orange-600 gap-1"
        >
          Ver tudo
          <RiArrowRightSLine
            size={24}
            color="rgb(234 88 12 / var(--tw-text-opacity))"
          />
        </Link>
      </div>
      <div className="flex flex-row gap-4 overflow-scroll mt-4">
        <CardDestaque
          srcImage={ImgFoodFirsh}
          alt="Foto do lanche"
          title="Big Burger"
          subTitle="Mais vendidos"
          price="7,59"
        />
        <CardDestaque
          srcImage={ImgFoodFirsh}
          alt="Foto do lanche"
          title="Big Burger"
          subTitle="Mais vendidos"
          price="7,59"
        />
        <CardDestaque
          srcImage={ImgFoodFirsh}
          alt="Foto do lanche"
          title="Big Burger"
          subTitle="Mais vendidos"
          price="7,59"
        />
        <CardDestaque
          srcImage={ImgFoodFirsh}
          alt="Foto do lanche"
          title="Big Burger"
          subTitle="Mais vendidos"
          price="7,59"
        />
        <CardDestaque
          srcImage={ImgFoodFirsh}
          alt="Foto do lanche"
          title="Big Burger"
          subTitle="Mais vendidos"
          price="7,59"
        />
      </div>
    </div>
  );
}

export default Burges;
