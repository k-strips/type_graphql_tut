import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumAcquisitionTypeWithAggregatesFilter } from "../inputs/EnumAcquisitionTypeWithAggregatesFilter";
import { EnumPropertyStateNullableWithAggregatesFilter } from "../inputs/EnumPropertyStateNullableWithAggregatesFilter";
import { EnumPropertyTypeWithAggregatesFilter } from "../inputs/EnumPropertyTypeWithAggregatesFilter";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { StringNullableListFilter } from "../inputs/StringNullableListFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class Property_RequestScalarWhereWithAggregatesInput {
    AND?: Property_RequestScalarWhereWithAggregatesInput[] | undefined;
    OR?: Property_RequestScalarWhereWithAggregatesInput[] | undefined;
    NOT?: Property_RequestScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    type?: EnumPropertyTypeWithAggregatesFilter | undefined;
    acquisition?: EnumAcquisitionTypeWithAggregatesFilter | undefined;
    state?: EnumPropertyStateNullableWithAggregatesFilter | undefined;
    amenities?: StringNullableListFilter | undefined;
    parkingCapacity?: IntNullableWithAggregatesFilter | undefined;
    seating?: IntNullableWithAggregatesFilter | undefined;
    bedrooms?: IntNullableWithAggregatesFilter | undefined;
    bathrooms?: IntNullableWithAggregatesFilter | undefined;
    additionalInfo?: StringNullableWithAggregatesFilter | undefined;
    region?: StringNullableWithAggregatesFilter | undefined;
    city?: StringNullableWithAggregatesFilter | undefined;
    town?: StringNullableWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
    userId?: StringNullableWithAggregatesFilter | undefined;
}
