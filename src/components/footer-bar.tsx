"use client"

import React from "react";
import { useRouter } from "next/navigation";

const FooterBar = () => {

    const router = useRouter();

  return (
    <div className="w-screen px-3 text-blue-600/70 sm:text-sm lg:text-base  bg-white-500/20 sticky bottom-0 flex justify-between py-2 items-end">
        <h1 className="cursor-pointer transition duration-150 hover:text-white" onClick={()=>{router.push("/")}}>VV17CH3R prod. @ 2023</h1>

      <button onClick={()=>{router.push(`/quotes`)}} className=" text-blue-600/50 font-bold  transition duration-150 hover:text-blue-700 text-sm lg:text-base underline">Еще стихи...</button>
    </div>
  );
};

export default FooterBar;
