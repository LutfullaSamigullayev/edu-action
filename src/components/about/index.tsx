import { LinkBtn, TitleSection } from "@/components";
import { useTranslations } from "next-intl";
import { AboutContent, ImageBox } from "./components";

export const About = () => {
  const t = useTranslations("About");
  return (
    <div className="container_">
      <TitleSection title={t("title")} orange2 />
      <div className="grid grid-cols-1 gap-y-6 lg:grid-cols-2 p-6 lg:p-9 xl:p-12 bg-milk dark:text-background rounded-3xl">
        <AboutContent />
        <div className="flex lg:justify-end">
          <div className="w-fit h-fit grid grid-cols-2 sm:grid-cols-4 gap-4">
            <ImageBox bg="/about/1.png" className="flex" />
            <ImageBox bg="/logo.png" logo className="flex sm:hidden" />
            <ImageBox bg="bg-gradient1" className="hidden sm:flex" arrow />
            <ImageBox bg="/about/2.png" className="flex" />
            <ImageBox bg="bg-gradient2" className="hidden sm:flex" arrow />
            <ImageBox bg="bg-gradient3" className="hidden sm:flex" arrow />
            <ImageBox bg="/about/3.png" className="flex" />
            <ImageBox bg="bg-gradient4" className="hidden sm:flex" arrow />
            <ImageBox bg="/about/4.png" className="hidden sm:flex " />
            <ImageBox bg="/about/5.png" className="hidden sm:flex" />
            <ImageBox bg="bg-gradient5" className="hidden sm:flex" arrow />
            <ImageBox bg="/about/6.png" className="hidden sm:flex" />
            <ImageBox bg="/logo.png" logo className="hidden sm:flex" />
          </div>
        </div>
        <div className="flex justify-end lg:hidden">
          <LinkBtn btnTitle="all" btnLink="#" border />
        </div>
      </div>
    </div>
  );
};
