import { PersonCommentType } from "@/types";
import Image from "next/image";
import { PlayLink } from "./play";

export const PersonComment = ({
  to,
  imgUrl,
  person,
  university,
}: PersonCommentType) => {
  return (
    <div className="relative h-[526px] md:h-[468px] rounded-2xl overflow-hidden">
      <Image
        src={imgUrl}
        alt="person"
        width={600}
        height={600}
        className="w-full h-full bg-no-repeat object-cover select-none"
      />
      {/* Gradient Overlay - adjusted to be transparent at top */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(179.97deg, rgba(0, 0, 0, 0) 0.03%, #000000 126.88%)",
        }}
      />
      <div className="md:hidden absolute top-0 left-0 p-4">
        <PlayLink to={to} />
      </div>
      <div className="absolute bottom-0 left-0 px-7 py-8 md:px-6 md:py-7 text-white">
        <h4 className="text-20">{person}</h4>
        <p>{university}</p>
      </div>
    </div>
  );
};
