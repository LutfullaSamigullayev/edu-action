import { SVGProps } from "react";

export interface MenuItems {
  id: number;
  link: string;
  title: string;
}

export interface LinkBtnT {
  children: string;
  to: string;
  orange?: boolean;
}

export type IconProps = SVGProps<SVGSVGElement>;
