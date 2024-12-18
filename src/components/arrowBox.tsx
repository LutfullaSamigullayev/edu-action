import { Icons } from "@/icons";

export const ArrowLink = () => {
  return (
    <div className="flex items-center justify-center aspect-square w-10 sm:w-12 md:w-14 lg:w-16 h-10 sm:h-12 md:h-14 lg:h-16  border border-white rounded-full">
      {/* aspect-square - bu class divni kvadrat shaklda saqlab beradi */}
      <Icons.arrow />
    </div>
  );
};
