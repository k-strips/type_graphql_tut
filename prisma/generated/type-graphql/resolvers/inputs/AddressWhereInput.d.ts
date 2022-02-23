import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { OrganizationRelationFilter } from "../inputs/OrganizationRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
export declare class AddressWhereInput {
    AND?: AddressWhereInput[] | undefined;
    OR?: AddressWhereInput[] | undefined;
    NOT?: AddressWhereInput[] | undefined;
    id?: StringFilter | undefined;
    email?: StringFilter | undefined;
    mobile?: StringNullableFilter | undefined;
    work?: StringNullableFilter | undefined;
    office?: StringNullableFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    Organization?: OrganizationRelationFilter | undefined;
    organizationId?: StringNullableFilter | undefined;
    User?: UserRelationFilter | undefined;
    userId?: StringNullableFilter | undefined;
}
