import { ProductCreateNestedManyWithoutCartsInput } from "./ProductCreateNestedManyWithoutCartsInput";

export type CartCreateInput = {
  abandoned?: boolean | null;
  discount?: number | null;
  price?: number | null;
  products?: ProductCreateNestedManyWithoutCartsInput;
};
