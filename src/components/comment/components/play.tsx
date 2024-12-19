import { useTranslations } from "next-intl";
import Link from "next/link";
import { Icons } from "@/icons";
import { PlayLinkType } from "@/types";

export const PlayLink = ({ to }: PlayLinkType) => {
  const t = useTranslations("Comment");
  return (
    <Link
      href={to ? to : "#"}
      className="flex items-center gap-x-2 px-8 py-4 rounded-2xl bg-orange2"
    >
      <Icons.play />
      <span className="text-white">{t("play")}</span>
    </Link>
  );
};
