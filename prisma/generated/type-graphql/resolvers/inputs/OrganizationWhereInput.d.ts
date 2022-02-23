import { AddressRelationFilter } from "../inputs/AddressRelationFilter";
import { AdvertisementListRelationFilter } from "../inputs/AdvertisementListRelationFilter";
import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { PropertyListRelationFilter } from "../inputs/PropertyListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserListRelationFilter } from "../inputs/UserListRelationFilter";
export declare class OrganizationWhereInput {
    AND?: OrganizationWhereInput[] | undefined;
    OR?: OrganizationWhereInput[] | undefined;
    NOT?: OrganizationWhereInput[] | undefined;
    id?: StringFilter | undefined;
    title?: StringFilter | undefined;
    address?: AddressRelationFilter | undefined;
    members?: UserListRelationFilter | undefined;
    properties?: PropertyListRelationFilter | undefined;
    advertisement?: AdvertisementListRelationFilter | undefined;
    isVerified?: BoolFilter | undefined;
    isRegistrated?: BoolFilter | undefined;
    isDeleted?: BoolFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
