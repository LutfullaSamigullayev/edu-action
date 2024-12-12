"use client";

import { menuItems } from "@/data";
import { MenuProps } from "@/types";
import clsx from "clsx";
import { useTranslations } from "next-intl";

export const Menu = ({ open, close }: MenuProps) => {
  const t = useTranslations("Menu");

  return (
    <div
      className={clsx(
        "fixed md:static top-0 left-0 z-20 md:z-0 bg-transparent h-full w-full transform -translate-x-full md:-translate-x-0 transition-transform duration-300",
        open && "block -translate-x-0 transition-transform duration-300"
      )}
      onClick={close}
    >
      <ul className="bg-background w-fit h-full p-4 md:p-0 flex flex-col md:flex-row gap-x-3 gap-y-3 lg:gap-x-12 font-medium">
        {menuItems.map((item) => (
          <li
            key={item.id}
            className="text-grey hover:text-foreground transition-all"
          >
            <a onClick={close} href={item.link} className="text-nowrap">
              {t(item.title)}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
