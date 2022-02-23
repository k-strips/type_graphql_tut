import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class AdvertisementScalarWhereWithAggregatesInput {
    AND?: AdvertisementScalarWhereWithAggregatesInput[] | undefined;
    OR?: AdvertisementScalarWhereWithAggregatesInput[] | undefined;
    NOT?: AdvertisementScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    isExpired?: BoolWithAggregatesFilter | undefined;
    isPaused?: BoolWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
    userId?: StringNullableWithAggregatesFilter | undefined;
    organizationId?: StringNullableWithAggregatesFilter | undefined;
    propertyId?: StringNullableWithAggregatesFilter | undefined;
}
