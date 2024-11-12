import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Banner, Footer, Header } from "@/components";

export default function HomePage() {
  const t = useTranslations("HomePage");
  return (
    <div className="h-full w-full flex flex-col justify-between">
      <div>
        <Header />
        <Banner />
      </div>
      <Footer />
    </div>
  );
}
