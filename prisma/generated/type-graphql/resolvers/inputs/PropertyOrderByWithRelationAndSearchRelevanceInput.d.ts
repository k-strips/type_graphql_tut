import { AdvertisementOrderByRelationAggregateInput } from "../inputs/AdvertisementOrderByRelationAggregateInput";
import { LandSizeOrderByWithRelationAndSearchRelevanceInput } from "../inputs/LandSizeOrderByWithRelationAndSearchRelevanceInput";
import { OrganizationOrderByWithRelationAndSearchRelevanceInput } from "../inputs/OrganizationOrderByWithRelationAndSearchRelevanceInput";
import { PriceOrderByWithRelationAndSearchRelevanceInput } from "../inputs/PriceOrderByWithRelationAndSearchRelevanceInput";
import { PropertyOrderByRelevanceInput } from "../inputs/PropertyOrderByRelevanceInput";
import { SaveOrderByRelationAggregateInput } from "../inputs/SaveOrderByRelationAggregateInput";
import { UserOrderByWithRelationAndSearchRelevanceInput } from "../inputs/UserOrderByWithRelationAndSearchRelevanceInput";
export declare class PropertyOrderByWithRelationAndSearchRelevanceInput {
    id?: "asc" | "desc" | undefined;
    type?: "asc" | "desc" | undefined;
    acquisition?: "asc" | "desc" | undefined;
    state?: "asc" | "desc" | undefined;
    size?: LandSizeOrderByWithRelationAndSearchRelevanceInput | undefined;
    price?: PriceOrderByWithRelationAndSearchRelevanceInput | undefined;
    images?: "asc" | "desc" | undefined;
    amenities?: "asc" | "desc" | undefined;
    parkingCapacity?: "asc" | "desc" | undefined;
    seating?: "asc" | "desc" | undefined;
    bedrooms?: "asc" | "desc" | undefined;
    bathrooms?: "asc" | "desc" | undefined;
    description?: "asc" | "desc" | undefined;
    views?: "asc" | "desc" | undefined;
    likes?: SaveOrderByRelationAggregateInput | undefined;
    source?: "asc" | "desc" | undefined;
    region?: "asc" | "desc" | undefined;
    city?: "asc" | "desc" | undefined;
    town?: "asc" | "desc" | undefined;
    streetName?: "asc" | "desc" | undefined;
    digitalAddress?: "asc" | "desc" | undefined;
    locationDesc?: "asc" | "desc" | undefined;
    lat?: "asc" | "desc" | undefined;
    lon?: "asc" | "desc" | undefined;
    isDeleted?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    owner?: UserOrderByWithRelationAndSearchRelevanceInput | undefined;
    organization?: OrganizationOrderByWithRelationAndSearchRelevanceInput | undefined;
    organizationId?: "asc" | "desc" | undefined;
    userId?: "asc" | "desc" | undefined;
    advertisement?: AdvertisementOrderByRelationAggregateInput | undefined;
    _relevance?: PropertyOrderByRelevanceInput | undefined;
}
