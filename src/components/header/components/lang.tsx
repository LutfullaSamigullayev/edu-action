"use client";

import { Icons } from "@/icons";
import { usePathname, useRouter } from "next/navigation";

export const LangSelect = () => {
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
  const locale = pathname.slice(1, 3);
  const handleLangChange = (newLang: string) => {
    const path = pathname.split("/").slice(2).join("/");
    router.push(`/${newLang}/${path}`);
  };

  // bu useEffectda ekranning hohlagan joyiga bosilganda lang menu yopiladi

  // useEffect(() => {
  //   document.body.addEventListener("click", (e: MouseEvent) => {
  //     const element = e.target as HTMLElement;
  //     if (element.closest("#lang-select")) { // closest degani uning ota elementini id orqali ushlab olish
  //       setOpen(!open);
  //     } else {
  //       setOpen(false);
  //     }
  //   });
  // }, []);

  const filterLanguage = Language.filter((lang) => lang.value !== locale);

  return (
    <div className="w-20 h-12 text-stone  relative select-none cursor-pointer">
      <div
        id="lang-select"
        className="group p-3 flex items-center justify-center gap-x-2 border border-stone rounded-lg hover:border-b-0 hover:rounded-br-none hover:rounded-bl-none transition-all"
      >
        <p className="leading-4 hover:rotate-6 transition-all">
          {locale.charAt(0).toUpperCase() + locale.slice(1)}
        </p>
        <div className="group-hover:rotate-180 transition-all duration-500">
          <Icons.down />
        </div>
        <ul className="w-full top-12 absolute bg-background divide-y divide-stone border border-stone rounded-bl-lg rounded-br-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:z-10 transition-all duration-300 ">
          {filterLanguage.map((lang) => (
            <li
              key={lang.id}
              className="flex gap-x-3 justify-center p-3  hover:text-orange transition-all "
              onClick={() => handleLangChange(lang.value)}
            >
              <span className="hover:rotate-6">{lang.title}</span>
              {lang.icon}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
