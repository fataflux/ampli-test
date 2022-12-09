import { Product } from "../product/Product";

export type Cart = {
  abandoned: boolean | null;
  createdAt: Date;
  discount: number | null;
  id: string;
  price: number | null;
  products?: Array<Product>;
  updatedAt: Date;
};
