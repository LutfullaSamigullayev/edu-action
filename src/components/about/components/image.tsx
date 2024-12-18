import { ArrowLink } from "@/components";
import { AboutBox } from "@/types";
import clsx from "clsx";
import Image from "next/image";

export const ImageBox = ({ bg, arrow, logo, className }: AboutBox) => {
  return (
    <div
      className={clsx(
        className,
        "w-40 h-40 sm:w-36 sm:h-36 lg:w-24 lg:h-24 xl:w-32 xl:h-32 items-center justify-center rounded-lg overflow-hidden",
        arrow && bg
      )}
    >
      {!arrow && (
        <Image
          src={bg}
          alt="aboutImage"
          width={160}
          height={160}
          className={clsx(
            "w-full h-full",
            logo ? "object-contain" : "object-cover object-center"
          )}
        />
      )}
      {arrow && <ArrowLink />}
    </div>
  );
};
