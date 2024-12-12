"use client";

import { LinkBtn, Logo } from "@/components";

import { Menu, LangSelect } from "./components";
import { Icons } from "@/icons";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  console.log("open:", isMenuOpen);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  return (
    <div className="md:border-b-2 pt-3 sm:pt-4 md:pb-4 xl:py-5 transition-all ease-in-out delay-500">
      <header className="container_ flex items-center justify-between font-medium">
        <div className="flex items-center gap-x-2 lg:gap-x-20">
          <Logo />
          <Menu open={isMenuOpen} close={toggleMenu} />
        </div>
        <div className="flex items-center gap-x-3">
          <LinkBtn children="Ariza qoldirish" to="#" orange />
          <div className="hidden md:block">
            <LangSelect />
          </div>
          <button
            onClick={toggleMenu}
            className="md:hidden bg-orange px-3 py-3 rounded-lg "
          >
            <Icons.burger fill="white" />
          </button>
        </div>
      </header>
    </div>
  );
};
