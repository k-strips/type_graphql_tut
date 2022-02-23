import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class AddressScalarWhereWithAggregatesInput {
    AND?: AddressScalarWhereWithAggregatesInput[] | undefined;
    OR?: AddressScalarWhereWithAggregatesInput[] | undefined;
    NOT?: AddressScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    email?: StringWithAggregatesFilter | undefined;
    mobile?: StringNullableWithAggregatesFilter | undefined;
    work?: StringNullableWithAggregatesFilter | undefined;
    office?: StringNullableWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
    organizationId?: StringNullableWithAggregatesFilter | undefined;
    userId?: StringNullableWithAggregatesFilter | undefined;
}
