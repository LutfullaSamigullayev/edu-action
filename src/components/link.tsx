import Link from "next/link";
import clsx from "clsx";
import { LinkBtnT } from "@/types";

export const LinkBtn = ({ children, to, orange }: LinkBtnT) => {
  return (
    <Link
      href={to}
      className={clsx(
        "px-6 py-3 rounded-lg sm:px-9 sm:py-4 whitespace-nowrap font-medium leading-5",
        orange && "bg-orange text-white bottom-1"
      )}
    >
      {children}
    </Link>
  );
};
