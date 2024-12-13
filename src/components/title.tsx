import { TitleT } from "@/types";
import { LinkBtn } from "./link";
import clsx from "clsx";

export const TitleSection = ({
  children,
  to,
  button,
  orange,
  orange2,
}: TitleT) => {
  console.log("button:", button);
  return (
    <div className="flex items-center justify-between">
      <h2 className="text-4xl font-semibold">
        {children.split(" ").length === 2 ? (
          <>
            <span className={clsx(orange && "text-orange")}>
              {children.split(" ")[0]}
            </span>
            <span> </span>
            <span className={clsx(orange2 && "text-orange")}>
              {children.split(" ")[1]}
            </span>
          </>
        ) : (
          <span>{children}</span>
        )}
      </h2>
      {button && <LinkBtn children="Barchasi" to={to ? to : "#"} />}
    </div>
  );
};
