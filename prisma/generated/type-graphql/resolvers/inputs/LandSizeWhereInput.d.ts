import { EnumLandSizeUnitFilter } from "../inputs/EnumLandSizeUnitFilter";
import { FloatFilter } from "../inputs/FloatFilter";
import { PropertyRelationFilter } from "../inputs/PropertyRelationFilter";
import { Property_RequestRelationFilter } from "../inputs/Property_RequestRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class LandSizeWhereInput {
    AND?: LandSizeWhereInput[] | undefined;
    OR?: LandSizeWhereInput[] | undefined;
    NOT?: LandSizeWhereInput[] | undefined;
    id?: StringFilter | undefined;
    measurement?: FloatFilter | undefined;
    unit?: EnumLandSizeUnitFilter | undefined;
    Property?: PropertyRelationFilter | undefined;
    propertyId?: StringNullableFilter | undefined;
    Property_Request?: Property_RequestRelationFilter | undefined;
    property_RequestId?: StringNullableFilter | undefined;
}
