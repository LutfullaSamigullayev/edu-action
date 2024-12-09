import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <div>
      <Link href={"/"}>
        <Image
          src={"/logo.png"}
          alt="logo"
          width={110}
          height={79}
          priority
          className="w-14 h-10 sm:w-16 sm:h-12 md:w-20 md:h-16 lg:w-28 lg:h-20 "
        />
      </Link>
    </div>
  );
};
