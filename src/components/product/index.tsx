import { TitleSection } from "@/components";
import { ProductCard, ProductSwiper } from "./components";
import { useTranslations } from "next-intl";
import { productItems } from "@/data";

export const Product = () => {
  const t = useTranslations("Product");
  return (
    <section className="container_">
      <TitleSection title={t("title")} button btnTitle="all" orange2 />

      <div className="md:hidden">
        <ProductSwiper />
      </div>

      <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {productItems.map((item) => (
          <ProductCard
            key={item.id}
            imgUrl={item.imgUrl}
            university={t(item.university)}
            location={t(item.location)}
            dergee={t(item.dergee)}
          />
        ))}
      </div>
    </section>
  );
};
