"use client";

import { Icons } from "@/icons";
import clsx from "clsx";
import { usePathname, useRouter } from "next/navigation";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";

export const LangSelect = ({ locale }: { locale: string }) => {
  const Language = [
    {
      id: 1,
      value: "uz",
      title: "Uz",
      icon: <Icons.uz />,
    },
    {
      id: 2,
      value: "ru",
      title: "Ru",
      icon: <Icons.ru />,
    },
    {
      id: 3,
      value: "en",
      title: "En",
      icon: <Icons.en />,
    },
  ];

  const pathname = usePathname();
  const router = useRouter();

  const [open, setOpen] = useState(false);
  console.log(open);
  const handleLangChange = (newLang: string) => {
    const path = pathname.split("/").slice(2).join("/");
    router.push(`/${newLang}/${path}`);
    setOpen(false);
  };

  const filterLanguage = Language.filter((lang) => lang.value !== locale);

  return (
    <div className="w-20 h-full text-stone  relative select-none cursor-pointer">
      <div
        onClick={() => setOpen(!open)}
        className={clsx(
          open && "border-b-0 rounded-br-none rounded-bl-none",
          "py-3 flex items-center justify-center gap-x-2 border border-stone  rounded-lg "
        )}
      >
        <p className="leading-4">
          {locale.charAt(0).toUpperCase() + locale.slice(1)}
        </p>
        <Icons.down />
      </div>
      <ul
        className={clsx(
          open ? "block" : "hidden",
          "w-full absolute bg-background divide-y divide-stone border  border-stone rounded-bl-lg rounded-br-lg transition-all"
        )}
      >
        {filterLanguage.map((lang) => (
          <li
            key={lang.id}
            className="hover:text-orange transition-all "
            onClick={() => handleLangChange(lang.value)}
          >
            <div className="flex gap-x-3 justify-center p-3 ">
              {lang.title}
              {lang.icon}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
