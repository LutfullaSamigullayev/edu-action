import { useTranslations } from "next-intl";
import { TitleSection } from "../title";
import { BlogCard } from "../cardBlog";

export const News = () => {
  const t = useTranslations("News");
  return (
    <div className="container_">
      <TitleSection title={t("title")} button btnTitle="all" />
      <BlogCard />
    </div>
  );
};
