import { OrganizationCountOrderByAggregateInput } from "../inputs/OrganizationCountOrderByAggregateInput";
import { OrganizationMaxOrderByAggregateInput } from "../inputs/OrganizationMaxOrderByAggregateInput";
import { OrganizationMinOrderByAggregateInput } from "../inputs/OrganizationMinOrderByAggregateInput";
export declare class OrganizationOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    title?: "asc" | "desc" | undefined;
    isVerified?: "asc" | "desc" | undefined;
    isRegistrated?: "asc" | "desc" | undefined;
    isDeleted?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    _count?: OrganizationCountOrderByAggregateInput | undefined;
    _max?: OrganizationMaxOrderByAggregateInput | undefined;
    _min?: OrganizationMinOrderByAggregateInput | undefined;
}
