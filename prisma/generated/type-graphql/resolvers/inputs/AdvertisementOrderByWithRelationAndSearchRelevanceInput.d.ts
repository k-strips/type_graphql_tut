import { AdvertisementOrderByRelevanceInput } from "../inputs/AdvertisementOrderByRelevanceInput";
import { OrganizationOrderByWithRelationAndSearchRelevanceInput } from "../inputs/OrganizationOrderByWithRelationAndSearchRelevanceInput";
import { PriceOrderByWithRelationAndSearchRelevanceInput } from "../inputs/PriceOrderByWithRelationAndSearchRelevanceInput";
import { PropertyOrderByWithRelationAndSearchRelevanceInput } from "../inputs/PropertyOrderByWithRelationAndSearchRelevanceInput";
import { UserOrderByWithRelationAndSearchRelevanceInput } from "../inputs/UserOrderByWithRelationAndSearchRelevanceInput";
export declare class AdvertisementOrderByWithRelationAndSearchRelevanceInput {
    id?: "asc" | "desc" | undefined;
    price?: PriceOrderByWithRelationAndSearchRelevanceInput | undefined;
    isExpired?: "asc" | "desc" | undefined;
    isPaused?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    user?: UserOrderByWithRelationAndSearchRelevanceInput | undefined;
    userId?: "asc" | "desc" | undefined;
    organization?: OrganizationOrderByWithRelationAndSearchRelevanceInput | undefined;
    organizationId?: "asc" | "desc" | undefined;
    property?: PropertyOrderByWithRelationAndSearchRelevanceInput | undefined;
    propertyId?: "asc" | "desc" | undefined;
    _relevance?: AdvertisementOrderByRelevanceInput | undefined;
}
