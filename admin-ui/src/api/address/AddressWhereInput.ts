import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type AddressWhereInput = {
  address_1?: StringNullableFilter;
  city?: StringNullableFilter;
  zip?: IntNullableFilter;
  id?: StringFilter;
  address_2?: StringNullableFilter;
  state?: StringNullableFilter;
  addingFieldForBuild?: StringNullableFilter;
};
