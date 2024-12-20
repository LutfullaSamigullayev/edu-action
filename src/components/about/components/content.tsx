import { LinkBtn } from "@/components";
import { useTranslations } from "next-intl";

export const AboutContent = () => {
  const t = useTranslations("About");

  return (
    <div className="flex flex-col justify-between gap-3">
      <div>
        <h3 className="text-20 md:text-3xl  text-orange font-semibold">
          {t("name")}
        </h3>
        <p className="text-20 leading-8 pt-3 sm:pt-4 md:pt-5 lg:pt-6 xl:pt-7">
          {t("about")}
        </p>
      </div>
      <div className="hidden lg:block">
        <LinkBtn btnTitle="all" btnLink="#" border />
      </div>
    </div>
  );
};
