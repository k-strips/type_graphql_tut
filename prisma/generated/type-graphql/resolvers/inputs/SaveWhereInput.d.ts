import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { PropertyRelationFilter } from "../inputs/PropertyRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
export declare class SaveWhereInput {
    AND?: SaveWhereInput[] | undefined;
    OR?: SaveWhereInput[] | undefined;
    NOT?: SaveWhereInput[] | undefined;
    id?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    User?: UserRelationFilter | undefined;
    userId?: StringNullableFilter | undefined;
    Property?: PropertyRelationFilter | undefined;
    propertyId?: StringNullableFilter | undefined;
}
