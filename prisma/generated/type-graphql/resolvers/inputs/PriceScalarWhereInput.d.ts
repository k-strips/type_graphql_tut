import { EnumCurrencyFilter } from "../inputs/EnumCurrencyFilter";
import { EnumDurationNullableFilter } from "../inputs/EnumDurationNullableFilter";
import { FloatFilter } from "../inputs/FloatFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class PriceScalarWhereInput {
    AND?: PriceScalarWhereInput[] | undefined;
    OR?: PriceScalarWhereInput[] | undefined;
    NOT?: PriceScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    figure?: FloatFilter | undefined;
    currency?: EnumCurrencyFilter | undefined;
    duration?: EnumDurationNullableFilter | undefined;
    propertyId?: StringNullableFilter | undefined;
    advertisementId?: StringNullableFilter | undefined;
    property_RequestId?: StringNullableFilter | undefined;
}
