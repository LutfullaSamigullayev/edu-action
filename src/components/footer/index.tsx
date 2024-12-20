import { Icons } from "@/icons";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  const t = useTranslations("Footer");
  return (
    <div className="bg-milk text-black">
      <footer className="container_ ">
        <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between gap-y-8 gap-x-2 pt-6 xl:pt-16 pb-9 xl:pb-20">
          <Link href="#" className="w-28 h-20">
            <Image src="/logo.png" alt="Logo" width={110} height={80} />
          </Link>
          <div className="w-fit">
            <p className="mb-4">{t("messenger")}</p>
            <div className="w-fit flex justify-between gap-x-2">
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
          <div className="w-fit">
            <Link
              href="#"
              className="flex items-center gap-2 mb-4 text-nowrap "
            >
              <Icons.phone />
              <p>+998 95 145 86 86</p>
            </Link>
            <Link href="#" className="flex items-center gap-2 text-nowrap ">
              <Icons.email />
              <p>info@edu-action.com</p>
            </Link>
          </div>
          <div className="w-52 hidden lg:block">
            <p className="mb-3">{t("address")}</p>
            <Link
              href="#"
              className="w-fit px-6 py-3 flex items-center gap-x-2 rounded-2xl bg-white"
            >
              <Icons.location2 />
              {t("map")}
            </Link>
          </div>
          <div className="md:hidden lg:block">
            <Link
              href="#"
              className="w-72 flex h-fit px-6 py-3 items-center  gap-x-2 rounded-2xl bg-white"
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
          </div>
        </div>
      </footer>
    </div>
  );
};
