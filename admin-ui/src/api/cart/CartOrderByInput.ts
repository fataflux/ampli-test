import { SortOrder } from "../../util/SortOrder";

export type CartOrderByInput = {
  abandoned?: SortOrder;
  createdAt?: SortOrder;
  discount?: SortOrder;
  id?: SortOrder;
  price?: SortOrder;
  updatedAt?: SortOrder;
};
