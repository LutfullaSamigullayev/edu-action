import React, { ReactNode, SVGProps } from "react";

export interface MenuItems {
  id: number;
  link: string;
  title: string;
}

export interface MenuProps {
  open?: boolean;
  close: () => void;
}

export interface LinkBtnT {
  children: string;
  to: string;
  orange?: boolean;
}
// Omit orqali biz kerakli kalitni moslashtirishimiz mumkin
export interface TitleT extends Omit<LinkBtnT, "to"> {
  to?: string;
  orange2?: boolean;
  button?: boolean;
}
export type IconProps = SVGProps<SVGSVGElement>;
