"use client";

import { Icons } from "@/icons";
import { useTranslations } from "next-intl";
import Link from "next/link";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ModalConnect = ({ isOpen, onClose }: ModalProps) => {
  const t = useTranslations("Modal");

  const handleOverlayClick = (e: React.MouseEvent) => {
    // Agar bosilgan joy modalning tashqarisi bo'lsa, onClose'ni chaqir
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      onClick={handleOverlayClick} // Tashqariga bosganda modalni yopish
      className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-30 z-50 ${
        isOpen ? "opacity-1 visible" : "opacity-0 invisible"
      }`}
    >
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-10 bg-white rounded-lg max-w-sm w-full flex flex-col items-center justify-center">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-transparent border-none"
        >
          <Icons.cancel2 />
        </button>
        <div className="w-36 h-36 mb-4">
          <Icons.done />
        </div>
        <p className=" text-green-800 mb-6 text-center text-lg">{t("send")}</p>
        <p className="  mb-6 text-center text-base">{t("connect")}</p>
        <Link
          href="/"
          onClick={onClose}
          className="flex items-center w-fit h-10 md:h-12 px-6 py-3 lg:px-9 lg:py-4 rounded-lg font-medium bg-orange text-white  hover:text-stone transition-all group"
        >
          {t("home")}
        </Link>
      </div>
    </div>
  );
};
