import { Cart } from "../cart/Cart";
import { Order } from "../order/Order";

export type Product = {
  cart?: Cart | null;
  createdAt: Date;
  description: string | null;
  id: string;
  itemPrice: number | null;
  name: string | null;
  orders?: Array<Order>;
  updatedAt: Date;
};
