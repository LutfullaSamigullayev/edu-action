import { TitleT } from "@/types";
import { LinkBtn } from "./link";

export const TitleSection = ({ children, to, button }: TitleT) => {
  console.log("button:", button);
  return (
    <div className="flex items-center justify-between">
      <h2>{children}</h2>
      {button && <LinkBtn children="Barchasi" to={to} />}
    </div>
  );
};
