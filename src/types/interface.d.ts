import { StaticImageData } from "next/image";
import type { Image as IImage, TypedObject } from "sanity";

// Global
export interface IChildren {
  children: React.ReactNode;
}

// Blog
interface IAuthor {
  authorName: string;
  image: string;
  slug: string;
}
interface ICategory {
  title: string;
  slug: string;
}
export interface IBlog {
  blogName: string;
  image: string;
  slug: string;
  description: TypedObject | TypedObject[];
  createdAt: string;
  category: ICategory;
  author: IAuthor;
}



export interface ISlug {
  slug: string;
}

export interface IParams {
  params: ISlug;
}

export interface ICartQuantity {
  productId: string;
  productName: string;
  productRate: number;
  quantity: number;
}

export interface ICart {
  products: IProduct[];
  totalAmount: number;
  totalItems: number;
  taxAmount: number;
  couponDiscount: number;
  discount: number;
  deliveryCharge: number;
  quantity: ICartQuantity[];
}

export interface ITeamPortfolio {
  employeeName: string;
  image: string;
  slug: string;
  description: TypedObject | TypedObject[];
  createdAt: string;
  department: string;
}
