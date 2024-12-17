import { useTranslations } from "next-intl";
import { TitleSection, BlogCard } from "@/components";
import { newsItems } from "@/data";

export const News = () => {
  const t = useTranslations("News");
  return (
    <div className="container_">
      <TitleSection title={t("title")} button btnTitle="all" />
      <div>
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
