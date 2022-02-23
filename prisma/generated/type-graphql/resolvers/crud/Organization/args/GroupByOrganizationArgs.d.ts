import { OrganizationOrderByWithAggregationInput } from "../../../inputs/OrganizationOrderByWithAggregationInput";
import { OrganizationScalarWhereWithAggregatesInput } from "../../../inputs/OrganizationScalarWhereWithAggregatesInput";
import { OrganizationWhereInput } from "../../../inputs/OrganizationWhereInput";
export declare class GroupByOrganizationArgs {
    where?: OrganizationWhereInput | undefined;
    orderBy?: OrganizationOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "title" | "isVerified" | "isRegistrated" | "isDeleted" | "createdAt" | "updatedAt">;
    having?: OrganizationScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
