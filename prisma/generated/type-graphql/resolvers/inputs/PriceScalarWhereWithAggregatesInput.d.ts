import { EnumCurrencyWithAggregatesFilter } from "../inputs/EnumCurrencyWithAggregatesFilter";
import { EnumDurationNullableWithAggregatesFilter } from "../inputs/EnumDurationNullableWithAggregatesFilter";
import { FloatWithAggregatesFilter } from "../inputs/FloatWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class PriceScalarWhereWithAggregatesInput {
    AND?: PriceScalarWhereWithAggregatesInput[] | undefined;
    OR?: PriceScalarWhereWithAggregatesInput[] | undefined;
    NOT?: PriceScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    figure?: FloatWithAggregatesFilter | undefined;
    currency?: EnumCurrencyWithAggregatesFilter | undefined;
    duration?: EnumDurationNullableWithAggregatesFilter | undefined;
    propertyId?: StringNullableWithAggregatesFilter | undefined;
    advertisementId?: StringNullableWithAggregatesFilter | undefined;
    property_RequestId?: StringNullableWithAggregatesFilter | undefined;
}
