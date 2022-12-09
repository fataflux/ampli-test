import { CartWhereUniqueInput } from "../cart/CartWhereUniqueInput";
import { OrderCreateNestedManyWithoutProductsInput } from "./OrderCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  cart?: CartWhereUniqueInput | null;
  description?: string | null;
  itemPrice?: number | null;
  name?: string | null;
  orders?: OrderCreateNestedManyWithoutProductsInput;
};
