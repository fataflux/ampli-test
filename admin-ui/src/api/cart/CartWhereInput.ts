import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { ProductListRelationFilter } from "../product/ProductListRelationFilter";

export type CartWhereInput = {
  abandoned?: BooleanNullableFilter;
  discount?: FloatNullableFilter;
  id?: StringFilter;
  price?: IntNullableFilter;
  products?: ProductListRelationFilter;
};
