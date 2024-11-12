import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <div>
      <Link href={"/"}>
        <Image src={"/logo.png"} alt="logo" width={110} height={80} />
      </Link>
    </div>
  );
};
