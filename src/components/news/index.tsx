import { useTranslations } from "next-intl";
import { TitleSection, BlogCard } from "@/components";
import { newsItems } from "@/data";
import { NewsSwiper } from "./components";

export const News = () => {
  const t = useTranslations("News");
  return (
    <div className="container_">
      <TitleSection title={t("title")} button btnTitle="all" />

      <div className="md:hidden">
        <NewsSwiper />
      </div>

      <div className="hidden md:grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6">
        {newsItems.map((item) => (
          <BlogCard
            key={item.id}
            imgUrl={item.imgUrl}
            title={t(item.title)}
            desc={t(item.desc)}
          />
        ))}
      </div>
    </div>
  );
};
