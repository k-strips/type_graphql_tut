import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class SaveScalarWhereInput {
    AND?: SaveScalarWhereInput[] | undefined;
    OR?: SaveScalarWhereInput[] | undefined;
    NOT?: SaveScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    userId?: StringNullableFilter | undefined;
    propertyId?: StringNullableFilter | undefined;
}
