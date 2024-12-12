import Link from "next/link";
import clsx from "clsx";
import { LinkBtnT } from "@/types";

export const LinkBtn = ({ children, to, orange }: LinkBtnT) => {
  return (
    <Link
      href={to}
      className={clsx(
        "flex items-center h-10 md:h-12 px-6 py-3 rounded-lg lg:px-9 lg:py-4 whitespace-nowrap font-medium leading-4",
        orange && "bg-orange text-white bottom-1"
      )}
    >
      {children}
    </Link>
  );
};
