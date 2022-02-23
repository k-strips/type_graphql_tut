import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumAcquisitionTypeFilter } from "../inputs/EnumAcquisitionTypeFilter";
import { EnumPropertyStateNullableFilter } from "../inputs/EnumPropertyStateNullableFilter";
import { EnumPropertyTypeFilter } from "../inputs/EnumPropertyTypeFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { StringNullableListFilter } from "../inputs/StringNullableListFilter";
export declare class Property_RequestScalarWhereInput {
    AND?: Property_RequestScalarWhereInput[] | undefined;
    OR?: Property_RequestScalarWhereInput[] | undefined;
    NOT?: Property_RequestScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    type?: EnumPropertyTypeFilter | undefined;
    acquisition?: EnumAcquisitionTypeFilter | undefined;
    state?: EnumPropertyStateNullableFilter | undefined;
    amenities?: StringNullableListFilter | undefined;
    parkingCapacity?: IntNullableFilter | undefined;
    seating?: IntNullableFilter | undefined;
    bedrooms?: IntNullableFilter | undefined;
    bathrooms?: IntNullableFilter | undefined;
    additionalInfo?: StringNullableFilter | undefined;
    region?: StringNullableFilter | undefined;
    city?: StringNullableFilter | undefined;
    town?: StringNullableFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    userId?: StringNullableFilter | undefined;
}
