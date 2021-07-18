import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const AddressCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Address 1" source="address_1" />
        <TextInput label="City" source="city" />
        <NumberInput step={1} label="Zip" source="zip" />
        <TextInput label="Address 2" source="address_2" />
        <TextInput label="State" source="state" />
        <TextInput
          label="Adding field for build"
          source="addingFieldForBuild"
        />
      </SimpleForm>
    </Create>
  );
};
