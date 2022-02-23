import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class AdvertisementScalarWhereInput {
    AND?: AdvertisementScalarWhereInput[] | undefined;
    OR?: AdvertisementScalarWhereInput[] | undefined;
    NOT?: AdvertisementScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    isExpired?: BoolFilter | undefined;
    isPaused?: BoolFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    userId?: StringNullableFilter | undefined;
    organizationId?: StringNullableFilter | undefined;
    propertyId?: StringNullableFilter | undefined;
}
