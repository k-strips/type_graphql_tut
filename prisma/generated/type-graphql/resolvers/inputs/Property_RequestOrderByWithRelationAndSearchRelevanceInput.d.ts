import { LandSizeOrderByWithRelationAndSearchRelevanceInput } from "../inputs/LandSizeOrderByWithRelationAndSearchRelevanceInput";
import { PriceOrderByRelationAggregateInput } from "../inputs/PriceOrderByRelationAggregateInput";
import { Property_RequestOrderByRelevanceInput } from "../inputs/Property_RequestOrderByRelevanceInput";
import { UserOrderByWithRelationAndSearchRelevanceInput } from "../inputs/UserOrderByWithRelationAndSearchRelevanceInput";
export declare class Property_RequestOrderByWithRelationAndSearchRelevanceInput {
    id?: "asc" | "desc" | undefined;
    type?: "asc" | "desc" | undefined;
    acquisition?: "asc" | "desc" | undefined;
    state?: "asc" | "desc" | undefined;
    priceRange?: PriceOrderByRelationAggregateInput | undefined;
    amenities?: "asc" | "desc" | undefined;
    size?: LandSizeOrderByWithRelationAndSearchRelevanceInput | undefined;
    parkingCapacity?: "asc" | "desc" | undefined;
    seating?: "asc" | "desc" | undefined;
    bedrooms?: "asc" | "desc" | undefined;
    bathrooms?: "asc" | "desc" | undefined;
    additionalInfo?: "asc" | "desc" | undefined;
    region?: "asc" | "desc" | undefined;
    city?: "asc" | "desc" | undefined;
    town?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    user?: UserOrderByWithRelationAndSearchRelevanceInput | undefined;
    userId?: "asc" | "desc" | undefined;
    _relevance?: Property_RequestOrderByRelevanceInput | undefined;
}
