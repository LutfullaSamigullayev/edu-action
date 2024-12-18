import { TitleSection } from "@/components";
import { useTranslations } from "next-intl";

export const Comment = () => {
  const t = useTranslations("Comment");
  return (
    <div className="container_">
      <TitleSection title={t("title")} orange1 />
      <div></div>
    </div>
  );
};
