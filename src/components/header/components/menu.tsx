import { menuItems } from "@/data";
import { useTranslations } from "next-intl";

export const Menu = () => {
  const t = useTranslations("Menu");

  return (
    <div className="hidden md:block">
      <ul className="flex gap-x-3 lg:gap-x-12 font-medium">
        {menuItems.map((item) => (
          <li key={item.id} className="text-grey">
            <a href={item.link}>{t(item.title)}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
