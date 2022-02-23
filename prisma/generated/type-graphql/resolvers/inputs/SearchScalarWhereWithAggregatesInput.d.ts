import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumAcquisitionTypeNullableWithAggregatesFilter } from "../inputs/EnumAcquisitionTypeNullableWithAggregatesFilter";
import { EnumPropertyCategoryWithAggregatesFilter } from "../inputs/EnumPropertyCategoryWithAggregatesFilter";
import { EnumPropertyStateNullableWithAggregatesFilter } from "../inputs/EnumPropertyStateNullableWithAggregatesFilter";
import { EnumPropertyTypeNullableWithAggregatesFilter } from "../inputs/EnumPropertyTypeNullableWithAggregatesFilter";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class SearchScalarWhereWithAggregatesInput {
    AND?: SearchScalarWhereWithAggregatesInput[] | undefined;
    OR?: SearchScalarWhereWithAggregatesInput[] | undefined;
    NOT?: SearchScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    userId?: StringWithAggregatesFilter | undefined;
    category?: EnumPropertyCategoryWithAggregatesFilter | undefined;
    type?: EnumPropertyTypeNullableWithAggregatesFilter | undefined;
    acquisition?: EnumAcquisitionTypeNullableWithAggregatesFilter | undefined;
    seating?: IntNullableWithAggregatesFilter | undefined;
    state?: EnumPropertyStateNullableWithAggregatesFilter | undefined;
    bedrooms?: IntNullableWithAggregatesFilter | undefined;
    bathrooms?: IntNullableWithAggregatesFilter | undefined;
    parkingCapacity?: IntNullableWithAggregatesFilter | undefined;
    location?: StringNullableWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
}
