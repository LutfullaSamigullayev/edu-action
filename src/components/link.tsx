import Link from "next/link";
import clsx from "clsx";
import { LinkBtnT } from "@/types";
import { useTranslations } from "next-intl";

export const LinkBtn = ({ btnTitle, btnLink, btnOrange }: LinkBtnT) => {
  const t = useTranslations("Button");
  return (
    <Link
      href={btnLink}
      className={clsx(
        "flex items-center w-fit h-10 md:h-12 px-6 py-3 lg:px-9 lg:py-4",
        "border border-stone rounded-lg text-nowrap font-medium leading-4 hover:text-orange",
        "group",
        btnOrange &&
          "bg-orange text-white bottom-1 border-none hover:text-stone transition-all"
      )}
    >
      <span className="select-none group-hover:rotate-6 transition-all">
        {t(btnTitle)}
      </span>
    </Link>
  );
};
