import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  BooleanField,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { CART_TITLE_FIELD } from "./CartTitle";

export const CartShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <BooleanField label="Abandoned" source="abandoned" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Discount" source="discount" />
        <TextField label="ID" source="id" />
        <TextField label="Price" source="price" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Product"
          target="CartId"
          label="Products"
        >
          <Datagrid rowClick="show">
            <ReferenceField label="Cart" source="cart.id" reference="Cart">
              <TextField source={CART_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="Description" source="description" />
            <TextField label="ID" source="id" />
            <TextField label="Item Price" source="itemPrice" />
            <TextField label="Name" source="name" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
