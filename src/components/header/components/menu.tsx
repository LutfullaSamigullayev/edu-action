import { menuItems } from "@/data";
import { useTranslations } from "next-intl";

export const Menu = () => {
  const t = useTranslations("Menu");

  return (
    <div>
      <ul className="flex gap-12 font-medium">
        {menuItems.map((item) => (
          <li key={item.id} className="text-grey">
            <a href={item.link}>{t(item.title)}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
