import { AdvertisementRelationFilter } from "../inputs/AdvertisementRelationFilter";
import { EnumCurrencyFilter } from "../inputs/EnumCurrencyFilter";
import { EnumDurationNullableFilter } from "../inputs/EnumDurationNullableFilter";
import { FloatFilter } from "../inputs/FloatFilter";
import { PropertyRelationFilter } from "../inputs/PropertyRelationFilter";
import { Property_RequestRelationFilter } from "../inputs/Property_RequestRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class PriceWhereInput {
    AND?: PriceWhereInput[] | undefined;
    OR?: PriceWhereInput[] | undefined;
    NOT?: PriceWhereInput[] | undefined;
    id?: StringFilter | undefined;
    figure?: FloatFilter | undefined;
    currency?: EnumCurrencyFilter | undefined;
    duration?: EnumDurationNullableFilter | undefined;
    Property?: PropertyRelationFilter | undefined;
    propertyId?: StringNullableFilter | undefined;
    advertisement?: AdvertisementRelationFilter | undefined;
    advertisementId?: StringNullableFilter | undefined;
    Property_Request?: Property_RequestRelationFilter | undefined;
    property_RequestId?: StringNullableFilter | undefined;
}
