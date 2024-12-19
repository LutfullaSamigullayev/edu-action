import { TitleSection } from "@/components";
import { commentItems } from "@/data";
import { useTranslations } from "next-intl";
import { CommentSwiper, PersonComment } from "./components";

export const Comment = () => {
  const t = useTranslations("Comment");
  return (
    <div className="container_">
      <TitleSection title={t("title")} orange1 />
      <div className="md:hidden">
        <CommentSwiper />
      </div>
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-4 xl:gap-x-6">
        {commentItems.map((item) => (
          <PersonComment
            key={item.id}
            imgUrl={item.imgUrl}
            person={t(item.person)}
            university={t(item.university)}
          />
        ))}
      </div>
    </div>
  );
};
