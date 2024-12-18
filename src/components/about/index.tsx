import { LinkBtn, TitleSection } from "@/components";
import { Icons } from "@/icons";
import { useTranslations } from "next-intl";

export const About = () => {
  const t = useTranslations("About");
  return (
    <div className="container_">
      <TitleSection title={t("title")} orange2 />
      <div className="bg-milk rounded-3xl">
        <div>
          <h3>{t("name")}</h3>
          <p>{t("about")}</p>
          <LinkBtn btnTitle="all" btnLink="#" />
        </div>
        <div>
          <div className="w-32 h-32 bg-gradient2">
            <Icons.arrow />
          </div>
        </div>
      </div>
    </div>
  );
};
