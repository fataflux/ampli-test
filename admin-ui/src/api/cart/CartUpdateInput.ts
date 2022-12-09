import { ProductUpdateManyWithoutCartsInput } from "./ProductUpdateManyWithoutCartsInput";

export type CartUpdateInput = {
  abandoned?: boolean | null;
  discount?: number | null;
  price?: number | null;
  products?: ProductUpdateManyWithoutCartsInput;
};
