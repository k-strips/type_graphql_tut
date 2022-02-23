import { AddressOrderByRelevanceInput } from "../inputs/AddressOrderByRelevanceInput";
import { OrganizationOrderByWithRelationAndSearchRelevanceInput } from "../inputs/OrganizationOrderByWithRelationAndSearchRelevanceInput";
import { UserOrderByWithRelationAndSearchRelevanceInput } from "../inputs/UserOrderByWithRelationAndSearchRelevanceInput";
export declare class AddressOrderByWithRelationAndSearchRelevanceInput {
    id?: "asc" | "desc" | undefined;
    email?: "asc" | "desc" | undefined;
    mobile?: "asc" | "desc" | undefined;
    work?: "asc" | "desc" | undefined;
    office?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    Organization?: OrganizationOrderByWithRelationAndSearchRelevanceInput | undefined;
    organizationId?: "asc" | "desc" | undefined;
    User?: UserOrderByWithRelationAndSearchRelevanceInput | undefined;
    userId?: "asc" | "desc" | undefined;
    _relevance?: AddressOrderByRelevanceInput | undefined;
}
