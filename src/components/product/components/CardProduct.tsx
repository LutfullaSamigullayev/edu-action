import { Icons } from "@/icons";
import Image from "next/image";

export const PCard = () => {
  return (
    <div className="relative w-64 md:w-80 h-48 md:h-60 rounded-2xl overflow-hidden">
      <Image
        src="/product/1.png"
        alt="product"
        width={340}
        height={260}
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
      <div className="absolute bottom-0 left-0 text-white">
        <div className="grid grid-cols-2 p-6 gap-y-2">
          <h3 className="font-semibold">Myunhem texnika universiteti</h3>
          <div className="col-start-1 flex items-center gap-2">
            <Icons.location />
            <p>Germany</p>
          </div>
          <p className="text-right">Magistratura</p>
        </div>
      </div>
    </div>
  );
};
