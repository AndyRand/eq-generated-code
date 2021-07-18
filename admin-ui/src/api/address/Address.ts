import { Customer } from "../customer/Customer";

export type Address = {
  createdAt: Date;
  address_1: string | null;
  city: string | null;
  zip: number | null;
  id: string;
  updatedAt: Date;
  address_2: string | null;
  state: string | null;
  customers?: Array<Customer>;
  addingFieldForBuild: string | null;
};
