import { TitleSection } from "@/components";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { ConnectForm } from "./components";

export const Connect = () => {
  const t = useTranslations("Connect");
  return (
    <div className="container_ hidden sm:block">
      <TitleSection title={t("title")} />
      <div className="bg-milk md:grid grid-cols-2 select-none rounded-2xl overflow-hidden">
        <Image
          src="/connect.png"
          alt="connect"
          width={800}
          height={800}
          className="w-full h-full hidden md:block"
        />
        <div className="xl:pl-14">
          <ConnectForm />
        </div>
      </div>
    </div>
  );
};
