import { AddressOrderByWithRelationAndSearchRelevanceInput } from "../inputs/AddressOrderByWithRelationAndSearchRelevanceInput";
import { AdvertisementOrderByRelationAggregateInput } from "../inputs/AdvertisementOrderByRelationAggregateInput";
import { OrganizationOrderByRelevanceInput } from "../inputs/OrganizationOrderByRelevanceInput";
import { PropertyOrderByRelationAggregateInput } from "../inputs/PropertyOrderByRelationAggregateInput";
import { UserOrderByRelationAggregateInput } from "../inputs/UserOrderByRelationAggregateInput";
export declare class OrganizationOrderByWithRelationAndSearchRelevanceInput {
    id?: "asc" | "desc" | undefined;
    title?: "asc" | "desc" | undefined;
    address?: AddressOrderByWithRelationAndSearchRelevanceInput | undefined;
    members?: UserOrderByRelationAggregateInput | undefined;
    properties?: PropertyOrderByRelationAggregateInput | undefined;
    advertisement?: AdvertisementOrderByRelationAggregateInput | undefined;
    isVerified?: "asc" | "desc" | undefined;
    isRegistrated?: "asc" | "desc" | undefined;
    isDeleted?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    _relevance?: OrganizationOrderByRelevanceInput | undefined;
}
