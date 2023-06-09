import { ISizes } from "./Product";

export interface ICartProduct {
  _id: string;
  images: string;
  price: number;
  selectedSize: ISizes;
  slug: string;
  title: string;
  gender: "men" | "women" | "kid" | "unisex";
  quantity: number;
  inStock?: number;
}
