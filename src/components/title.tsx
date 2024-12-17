import { TitleT } from "@/types";
import { LinkBtn } from "./link";
import clsx from "clsx";

export const TitleSection = ({
  title,
  button,
  btnTitle,
  btnLink,
  orange1,
  orange2,
}: TitleT) => {
  return (
    <div className="flex items-center justify-between pb-6 sm:pb-7 md:pb-8 lg:pb-9 xl:pb-10 2xl:pb-12 ">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
        {title.split(" ").length === 2 ? (
          <>
            <span className={clsx(orange1 && "md:text-orange")}>
              {title.split(" ")[0]}
            </span>
            <span> </span>
            <span className={clsx(orange2 && "md:text-orange")}>
              {title.split(" ")[1]}
            </span>
          </>
        ) : (
          <span>{title}</span>
        )}
      </h2>
      {button && (
        <LinkBtn btnTitle={btnTitle} btnLink={btnLink ? btnLink : "#"} />
      )}
    </div>
  );
};
