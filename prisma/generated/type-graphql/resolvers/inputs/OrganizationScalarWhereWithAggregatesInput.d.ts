import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class OrganizationScalarWhereWithAggregatesInput {
    AND?: OrganizationScalarWhereWithAggregatesInput[] | undefined;
    OR?: OrganizationScalarWhereWithAggregatesInput[] | undefined;
    NOT?: OrganizationScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    title?: StringWithAggregatesFilter | undefined;
    isVerified?: BoolWithAggregatesFilter | undefined;
    isRegistrated?: BoolWithAggregatesFilter | undefined;
    isDeleted?: BoolWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
