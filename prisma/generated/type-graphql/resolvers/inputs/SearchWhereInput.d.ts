import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumAcquisitionTypeNullableFilter } from "../inputs/EnumAcquisitionTypeNullableFilter";
import { EnumPropertyCategoryFilter } from "../inputs/EnumPropertyCategoryFilter";
import { EnumPropertyStateNullableFilter } from "../inputs/EnumPropertyStateNullableFilter";
import { EnumPropertyTypeNullableFilter } from "../inputs/EnumPropertyTypeNullableFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class SearchWhereInput {
    AND?: SearchWhereInput[] | undefined;
    OR?: SearchWhereInput[] | undefined;
    NOT?: SearchWhereInput[] | undefined;
    id?: StringFilter | undefined;
    userId?: StringFilter | undefined;
    category?: EnumPropertyCategoryFilter | undefined;
    type?: EnumPropertyTypeNullableFilter | undefined;
    acquisition?: EnumAcquisitionTypeNullableFilter | undefined;
    seating?: IntNullableFilter | undefined;
    state?: EnumPropertyStateNullableFilter | undefined;
    bedrooms?: IntNullableFilter | undefined;
    bathrooms?: IntNullableFilter | undefined;
    parkingCapacity?: IntNullableFilter | undefined;
    location?: StringNullableFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
}
