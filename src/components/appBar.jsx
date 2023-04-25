import React from "react";
import Image from "next/image";
import { RiSearchLine } from "react-icons/ri";

export default function AppBar() {
  return (
    <div className="flex flex-row justify-between items-center gap-1">
      <div className="w-12 h-10 rounded-full bg-orange-400">
        <Image
          src={"/assets/profile.png"}
          width={40}
          height={40}
          alt="Profile"
          className="w-10 h-10 rounded-full"
        ></Image>
      </div>
      <div className="w-full ml-2">
        <p className="text-xs font-light">Bem vindo</p>
        <h1 className="text-base font-medium">Harrison Burgue</h1>
      </div>
      <div className="w-5 h-5">
        <RiSearchLine size={20} />
      </div>
    </div>
  );
}
