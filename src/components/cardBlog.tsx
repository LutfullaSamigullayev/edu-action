import { CardBlogType } from "@/types";
import clsx from "clsx";
import Image from "next/image";

export const BlogCard = ({ horizontal }: CardBlogType) => {
  return (
    <div
      className={clsx(
        horizontal && "flex",
        "bg-milk rounded-2xl overflow-hidden"
      )}
    >
      <Image
        src={"/news/1.png"}
        alt="news"
        width={340}
        height={220}
        className={clsx(
          horizontal ? "w-72 h-52" : "w-full h-60 md:h-52",
          "  bg-no-repeat object-cover select-none"
        )}
      />
      <div className=" p-4 md:p-6 ">
        <h3 className="text-black text-xl">
          Shahriyor Tojiboyev - "Master's in Law" (huquq sohasida....
        </h3>
        <p className={clsx("pt-3", horizontal ? "md:p-3" : "md:p-2")}>
          "Master's in Law" (huquq sohasida magistratura bosqichi)ni Amerikaning
          nufuzli oliygohlaridan birida o'qish imkoniyatiga ega bo'ldi.
        </p>
      </div>
    </div>
  );
};
