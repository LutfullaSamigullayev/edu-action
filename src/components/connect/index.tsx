import { TitleSection } from "@/components";
import { useTranslations } from "next-intl";

export const Connect = () => {
  const t = useTranslations("Connect");
  return (
    <div className="container_">
      <TitleSection title={t("title")} />
    </div>
  );
};
