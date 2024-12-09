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

export interface TitleT {
  children: string;
  to: string;
  button?: boolean;
}

export type IconProps = SVGProps<SVGSVGElement>;
