import { TitleSection, BlogCard } from "@/components";
import { useTranslations } from "next-intl";
import { articleItems } from "@/data";
import { ArticleSwiper } from "./components";

export const Article = () => {
  const t = useTranslations("Article");
  return (
    <div className="container_">
      <TitleSection title={t("title")} button btnTitle="all" />

      <div className="md:hidden">
        <ArticleSwiper />
      </div>

      <div className="hidden md:grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6">
        {articleItems.map((item) => (
          <BlogCard
            horizontal
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
