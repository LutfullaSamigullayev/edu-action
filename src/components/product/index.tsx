import { TitleSection } from "@/components";
import { useTranslations } from "next-intl";

export const Product = () => {
  const t = useTranslations("Product");
  return (
    <section className="container_">
      <TitleSection children={t("title")} to="#" button orange2 />
      <div>produc main</div>
    </section>
  );
};
