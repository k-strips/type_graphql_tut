import { AdvertisementOrderByWithRelationAndSearchRelevanceInput } from "../inputs/AdvertisementOrderByWithRelationAndSearchRelevanceInput";
import { PriceOrderByRelevanceInput } from "../inputs/PriceOrderByRelevanceInput";
import { PropertyOrderByWithRelationAndSearchRelevanceInput } from "../inputs/PropertyOrderByWithRelationAndSearchRelevanceInput";
import { Property_RequestOrderByWithRelationAndSearchRelevanceInput } from "../inputs/Property_RequestOrderByWithRelationAndSearchRelevanceInput";
export declare class PriceOrderByWithRelationAndSearchRelevanceInput {
    id?: "asc" | "desc" | undefined;
    figure?: "asc" | "desc" | undefined;
    currency?: "asc" | "desc" | undefined;
    duration?: "asc" | "desc" | undefined;
    Property?: PropertyOrderByWithRelationAndSearchRelevanceInput | undefined;
    propertyId?: "asc" | "desc" | undefined;
    advertisement?: AdvertisementOrderByWithRelationAndSearchRelevanceInput | undefined;
    advertisementId?: "asc" | "desc" | undefined;
    Property_Request?: Property_RequestOrderByWithRelationAndSearchRelevanceInput | undefined;
    property_RequestId?: "asc" | "desc" | undefined;
    _relevance?: PriceOrderByRelevanceInput | undefined;
}
