import { Icons } from "@/icons";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  const t = useTranslations("Footer");
  return (
    <div className="bg-milk text-black">
      <footer className="container_ flex gap-x-28">
        <Link href="#">
          <Image
            src="/logo.png"
            alt="Logo"
            width={110}
            height={80}
            className="w-28 h-20"
          />
        </Link>
        <div>
          <p className="text-center mb-4">{t("messenger")}</p>
          <div className="flex justify-between gap-x-2">
            <Link href="#">
              <Icons.instagram />
            </Link>
            <Link href="#">
              <Icons.facebook />
            </Link>
            <Link href="#">
              <Icons.telegram />
            </Link>
            <Link href="#">
              <Icons.twitter />
            </Link>
          </div>
        </div>
        <div>
          <Link href="#" className="flex items-center gap-2 mb-4 text-nowrap ">
            <Icons.phone />
            <p>+998 95 145 86 86</p>
          </Link>
          <Link href="#" className="flex items-center gap-2 text-nowrap ">
            <Icons.email />
            <p>info@edu-action.com</p>
          </Link>
        </div>
        <div>
          <p className="mb-3">{t("address")}</p>
          <Link
            href="#"
            className="w-fit px-6 py-3 flex items-center gap-x-2 rounded-2xl bg-white"
          >
            <Icons.location2 />
            {t("map")}
          </Link>
        </div>
        <Link
          href="#"
          className="w-fit h-fit px-6 py-3 flex items-center gap-x-2 rounded-2xl bg-white"
        >
          <Image
            src="/appx.png"
            alt="appx"
            width={33}
            height={33}
            className="w-8 h-8"
          />
          {t("dev")}
        </Link>
      </footer>
    </div>
  );
};
