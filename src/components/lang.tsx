"use client";

import { routing } from "@/i18n/routing";
import { usePathname, useRouter } from "next/navigation";
import React, { ChangeEvent, useState } from "react";

export const LangSelect = () => {
  const pathname = usePathname();
  const router = useRouter();

  const [lang, setLang] = useState("uz");
  console.log("lang: ", lang);
  const handleLangChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value as string;
    setLang(newLocale);
    console.log("newLocale: ", newLocale);
    const path = pathname.split("/").slice(2).join("/");
    console.log("path: ", path);
    router.push(`/${newLocale}/${path}`);
  };

  return (
    <div className="w-16 h-full p-1 border rounded-lg relative">
      {lang}
      <ul className="absolute -bottom-full">
        {routing.locales.map((lang) => (
          <li>{lang}</li>
        ))}
      </ul>
    </div>
  );
};

// const Navbar = ({ locale }: { locale: string }) => {
