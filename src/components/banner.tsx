import { Icons } from "@/icons";
import { useTranslations } from "next-intl";

export const Banner = () => {
  const t = useTranslations("Banner");
  return (
    <section className="container_">
      <div className="flex flex-col justify-end gap-y-8 p-6 text-white md:p-10 lg:p-14 xl:p-20 h-60 sm:h-96 md:h-[440px] lg:h-[600px] xl:h-[716px] bg-[url('/banner.png')] bg-no-repeat bg-cover bg-center font-medium rounded-2xl sm:rounded-3xl">
        <h1 className="hidden md:block font-semibold text-4xl lg:text-5xl xl:text-6xl">
          {t("title")}
        </h1>
        <div className="flex items-center gap-x-6">
          <p className="text-base md:text-xl lg:text-2xl">{t("desc")}</p>
          <div className="hidden sm:flex items-center justify-center w-16 h-16  border border-white rounded-full">
            <Icons.arrow />
          </div>
        </div>
      </div>
    </section>
  );
};
