import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class SaveScalarWhereWithAggregatesInput {
    AND?: SaveScalarWhereWithAggregatesInput[] | undefined;
    OR?: SaveScalarWhereWithAggregatesInput[] | undefined;
    NOT?: SaveScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    userId?: StringNullableWithAggregatesFilter | undefined;
    propertyId?: StringNullableWithAggregatesFilter | undefined;
}
