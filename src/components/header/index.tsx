import { Logo } from "@/components";

import { Menu } from "./components";

export const Header = () => {
  return (
    <div className="bg-milk">
      <header className="container_ flex items-center gap-10">
        <Logo />
        <Menu />
      </header>
    </div>
  );
};
