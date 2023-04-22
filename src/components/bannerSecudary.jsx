import Image from "next/image";
import Link from "next/link";
import React from "react";

//ui
import SubTitleSection from "./ui/subTitleSection";

function BannerSecudary() {
  return (
    <div className="flex flex-col gap-4">
      <SubTitleSection subTitle={"Promoção"} />
      <div className="w-full p-5 rounded-2xl bg-white bg-opacity-60 flex flex-row shadow-md">
        <div className="w-full mt-6 flex flex-col gap-2 flex-1 items-start justify-around">
          <h2 className="text-sm font-bold "> Frete gratis</h2>
          <Link
            href="./"
            className="bg-orange-400 py-2 px-4 rounded-lg flex justify-center items-center"
          >
            <span className="text-white text-xs font-bold">Ver promoção</span>
          </Link>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <Image src={"/assets/character.png"} width={999} height={999} />
        </div>
      </div>
    </div>
  );
}

export default BannerSecudary;
