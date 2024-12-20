import { SVGProps } from "react";

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
  btnTitle: string;
  btnLink: string;
  btnOrange?: boolean;
  border?: boolean;
}
// Omit orqali biz kerakli kalitni moslashtirishimiz mumkin
export interface TitleT extends Omit<LinkBtnT, "btnLink" | "btnTitle"> {
  title: string;
  button?: boolean;
  btnTitle?: string;
  btnLink?: string;
  orange1?: boolean;
  orange2?: boolean;
}
export type IconProps = SVGProps<SVGSVGElement>;

export interface CardProductType {
  imgUrl: string;
  university: string;
  location: string;
  dergee: string;
}
export interface ProductItems extends CardProductType {
  id: number;
}

export interface CardBlogType {
  imgUrl: string;
  title: string;
  desc: string;
  horizontal?: boolean;
}
export interface NewsItemsType extends CardBlogType {
  id: number;
}
export interface ArticleItemsType extends CardBlogType {
  id: number;
}

export interface AboutBox {
  bg: string;
  className: string;
  arrow?: boolean;
  logo?: boolean;
}
export interface PlayLinkType {
  to?: string;
}
export interface PersonCommentType extends PlayLinkType {
  imgUrl: string;
  person: string;
  university: string;
}
export interface PersonItem extends PersonCommentType {
  id: number;
}

export interface ButtonType {
  onSubmit?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
