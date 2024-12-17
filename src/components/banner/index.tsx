import { Icons } from "@/icons";
import { useTranslations } from "next-intl";
import Image from "next/image";

export const Banner = () => {
  const t = useTranslations("Banner");
  return (
    <section className="container_">
      <div className="relative w-full h-60 sm:h-96 md:h-[440px] lg:h-[600px] xl:h-[716px] rounded-lg overflow-hidden">
        <Image
          src="/banner.png"
          alt="banner"
          width={1440}
          height={776}
          className="w-full h-full bg-no-repeat object-cover select-none"
        />
        {/* Gradient Overlay - adjusted to be transparent at top */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.7) 30%, transparent 60%)",
          }}
        />
        <div className="absolute bottom-0 left-0 p-6 sm:p-8 md:p-10 xl:p-20  text-white">
          <h3 className="hidden md:block w-3/5 font-semibold text-4xl lg:text-5xl xl:text-6xl mb-4 lg:mb-8 xl:leading-[80px]">
            {t("title")}
          </h3>
          <div className="w-full sm:w-4/5 md:w-3/5 xl:w-2/5  flex items-center justify-between gap-x-3 sm:gap-x-4 md:gap-x-5 lg:gap-x-6">
            <p className=" text-base md:text-xl lg:text-2xl">{t("desc")}</p>
            <div className="hidden sm:flex items-center justify-center aspect-square w-10 sm:w-12 md:w-14 lg:w-16 h-10 sm:h-12 md:h-14 lg:h-16  border border-white rounded-full">
              <Icons.arrow />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
