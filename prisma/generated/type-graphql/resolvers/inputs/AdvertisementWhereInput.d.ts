import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { OrganizationRelationFilter } from "../inputs/OrganizationRelationFilter";
import { PriceRelationFilter } from "../inputs/PriceRelationFilter";
import { PropertyRelationFilter } from "../inputs/PropertyRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
export declare class AdvertisementWhereInput {
    AND?: AdvertisementWhereInput[] | undefined;
    OR?: AdvertisementWhereInput[] | undefined;
    NOT?: AdvertisementWhereInput[] | undefined;
    id?: StringFilter | undefined;
    price?: PriceRelationFilter | undefined;
    isExpired?: BoolFilter | undefined;
    isPaused?: BoolFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    user?: UserRelationFilter | undefined;
    userId?: StringNullableFilter | undefined;
    organization?: OrganizationRelationFilter | undefined;
    organizationId?: StringNullableFilter | undefined;
    property?: PropertyRelationFilter | undefined;
    propertyId?: StringNullableFilter | undefined;
}
