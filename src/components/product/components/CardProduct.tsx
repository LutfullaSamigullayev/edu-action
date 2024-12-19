import { Icons } from "@/icons";
import { CardProductType } from "@/types";
import Image from "next/image";

export const ProductCard = ({
  imgUrl,
  university,
  location,
  dergee,
}: CardProductType) => {
  return (
    <div className="relative h-48 md:h-60 rounded-2xl overflow-hidden">
      <Image
        src={imgUrl}
        alt="product"
        width={600}
        height={600}
        className="w-full h-full bg-no-repeat object-cover select-none"
      />
      {/* Gradient Overlay - adjusted to be transparent at top */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 100%)",
        }}
      />
      <div className="absolute h-full bottom-0 left-0 text-white">
        <div className="h-full flex justify-between items-end p-3 md:p-6 ">
          <div className="h-full flex flex-col justify-between md:justify-end md:gap-y-2">
            <h3 className="font-semibold">{university}</h3>
            <div className="flex items-center gap-2">
              <Icons.location />
              <p>{location}</p>
            </div>
          </div>
          <p className="">{dergee}</p>
        </div>
      </div>
    </div>
  );
};
