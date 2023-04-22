import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Banner() {
  return (
    <div className="w-full p-5 rounded-2xl bg-orange-200 bg-opacity-40 flex flex-row shadow-md">
      <div className="w-full mt-6 flex flex-col gap-2 flex-1 items-start justify-around">
        <h2 className="text-sm font-bold ">Melhores preços </h2>
        <Link
          href="./"
          className="bg-orange-400 py-2 px-4 rounded-lg flex justify-center items-center"
        >
          <span className="text-white text-xs font-bold">Pedir agora</span>
        </Link>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <Image src={"/assets/delivery.png"} width={999} height={999} />
      </div>
    </div>
  );
}
