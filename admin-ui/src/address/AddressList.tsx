import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const AddressList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Addresses"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="Address 1" source="address_1" />
        <TextField label="City" source="city" />
        <TextField label="Zip" source="zip" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Address 2" source="address_2" />
        <TextField label="State" source="state" />
        <TextField
          label="Adding field for build"
          source="addingFieldForBuild"
        />
      </Datagrid>
    </List>
  );
};
