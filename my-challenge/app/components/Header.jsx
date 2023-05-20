"use client";

import React from "react";
import DarkModeBnt from "./DarkModeBnt";

const Header = () => {
  return (
    <header className="flex flex-row justify-between w-full max-w-xs py-6 mx-auto md:max-w-7xl lg:max-w-7xl md:p-5">
      <div className="flex flex-row items-center space-x-16">
        <h1 className="uppercase md:text-[30px] lg:text-[30px] text-[16px] font-bold text-black dark:text-white">
          Champions League Players
        </h1>
      </div>
      <div>
        <DarkModeBnt />
      </div>
    </header>
  );
};

export default Header;
