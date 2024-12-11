"use client";

import { routing } from "@/i18n/routing";
import { Icons } from "@/icons";
import { usePathname, useRouter } from "next/navigation";
import React, { ChangeEvent, useState } from "react";

export const LangSelect = ({ locale }: { locale: string }) => {
  const pathname = usePathname();
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const handleLangChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value as string;
    const path = pathname.split("/").slice(2).join("/");
    router.push(`/${newLocale}/${path}`);
  };

  return (
    <div className="w-20 h-full text-stone  relative ">
      <div className="py-3 flex items-center justify-center gap-x-2 border border-stone border-b-0 rounded-lg rounded-br-none rounded-bl-none">
        <p className="leading-4">Uz</p>
        <Icons.down />
      </div>
      <ul className=" w-full absolute bg-background divide-y divide-stone border  border-stone rounded-bl-lg rounded-br-lg">
        <li>
          <div className="flex gap-x-3 justify-center p-3 ">
            {locale.toLocaleUpperCase()}
            <Icons.ru />
          </div>
        </li>
        <li>
          <div className="flex gap-x-3 justify-center p-3">
            {locale.toLocaleUpperCase()}
            <Icons.ru />
          </div>
        </li>
        {/* {routing.locales.map((lang, index) => (
          <li key={index}>{lang}</li>
        ))} */}
      </ul>
    </div>
  );
};
