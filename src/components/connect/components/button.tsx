import { ButtonType } from "@/types";
import { useTranslations } from "next-intl";

export const ButtonSubmit = ({ onSubmit }: ButtonType) => {
  const t = useTranslations("Button");

  return (
    <button
      onClick={onSubmit}
      className="flex items-center w-fit h-10 md:h-12 px-6 py-3 lg:px-9 lg:py-4 rounded-lg font-medium bg-orange text-white  hover:text-stone transition-all group"
    >
      <span className="select-none group-hover:rotate-6 transition-all">
        {t("send")}
      </span>
    </button>
  );
};
