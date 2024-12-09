import { LangSelect, LinkBtn, Logo } from "@/components";

import { Menu } from "./components";
import { Icons } from "@/icons";

export const Header = () => {
  return (
    <div className="md:border-b-2 pt-3 sm:pt-4 md:pb-4 xl:py-5 transition-all ease-in-out delay-500">
      <header className="container_ flex items-center justify-between">
        <div className="flex items-center gap-x-3 lg:gap-x-32">
          <Logo />
          <Menu />
        </div>
        <div className="flex gap-x-3">
          <LinkBtn children="Ariza qoldirish" to="#" orange />
          <div className="hidden lg:block">{/* <LangSelect /> */}</div>
          <button className="lg:hidden bg-orange px-3 py-3 rounded-lg ">
            <Icons.burger fill="white" />
          </button>
        </div>
      </header>
    </div>
  );
};
