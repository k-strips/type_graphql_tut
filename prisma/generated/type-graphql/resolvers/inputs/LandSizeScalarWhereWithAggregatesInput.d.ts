import { EnumLandSizeUnitWithAggregatesFilter } from "../inputs/EnumLandSizeUnitWithAggregatesFilter";
import { FloatWithAggregatesFilter } from "../inputs/FloatWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class LandSizeScalarWhereWithAggregatesInput {
    AND?: LandSizeScalarWhereWithAggregatesInput[] | undefined;
    OR?: LandSizeScalarWhereWithAggregatesInput[] | undefined;
    NOT?: LandSizeScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    measurement?: FloatWithAggregatesFilter | undefined;
    unit?: EnumLandSizeUnitWithAggregatesFilter | undefined;
    propertyId?: StringNullableWithAggregatesFilter | undefined;
    property_RequestId?: StringNullableWithAggregatesFilter | undefined;
}
