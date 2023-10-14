"use client"

import React from "react";
import { useRouter } from "next/navigation";

const NavBar = () => {

    const router = useRouter();

  return (
    <div className="w-screen px-3 text-white/70 sm:text-xl lg:text-3xl backdrop-blur bg-white-500/20 sticky top-0 flex justify-between py-2 items-end">
        <h1 className="cursor-pointer transition duration-150 hover:text-white" onClick={()=>{router.push("/")}}>Vishnu sahasranamam</h1>

      <button onClick={()=>{router.push(`/about`)}} className=" text-white/50  transition duration-150 hover:text-white text-sm lg:text-xl underline">О сайте</button>
    </div>
  );
};

export default NavBar;
