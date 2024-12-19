import { CardBlogType } from "@/types";
import clsx from "clsx";
import Image from "next/image";

export const BlogCard = ({ title, imgUrl, desc, horizontal }: CardBlogType) => {
  return (
    <div
      className={clsx(
        horizontal && "flex",
        "bg-milk rounded-2xl overflow-hidden"
      )}
    >
      <Image
        src={imgUrl}
        alt={horizontal ? "blog" : "news"}
        width={1200}
        height={1200}
        className={clsx(
          horizontal ? "w-72 h-52" : "w-full h-60 md:h-52",
          "  bg-no-repeat object-cover select-none"
        )}
      />
      <div className=" p-4 md:p-6 ">
        <h3 className="text-black text-xl">{title}</h3>
        <p className={clsx("pt-3", horizontal ? "md:pt-3" : "md:pt-2")}>
          {desc}
        </p>
      </div>
    </div>
  );
};
