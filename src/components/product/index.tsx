import { TitleSection } from "@/components";
import { useTranslations } from "next-intl";
import { PCard } from "./components";

export const Product = () => {
  const t = useTranslations("Product");
  return (
    <section className="container_">
      <TitleSection
        title={t("title")}
        btnTitle="all"
        btnLink="#"
        button
        orange2
      />
      <div>
        <PCard />
      </div>
    </section>
  );
};
