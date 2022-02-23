import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumUserStatusFilter } from "../inputs/EnumUserStatusFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class UserScalarWhereInput {
    AND?: UserScalarWhereInput[] | undefined;
    OR?: UserScalarWhereInput[] | undefined;
    NOT?: UserScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    firstName?: StringFilter | undefined;
    lastName?: StringFilter | undefined;
    middleName?: StringNullableFilter | undefined;
    status?: EnumUserStatusFilter | undefined;
    isVerified?: BoolFilter | undefined;
    isRegistrated?: BoolFilter | undefined;
    isDeleted?: BoolFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    organizationId?: StringNullableFilter | undefined;
}
