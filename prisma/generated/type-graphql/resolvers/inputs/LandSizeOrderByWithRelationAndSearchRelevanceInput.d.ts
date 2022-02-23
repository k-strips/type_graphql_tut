import { LandSizeOrderByRelevanceInput } from "../inputs/LandSizeOrderByRelevanceInput";
import { PropertyOrderByWithRelationAndSearchRelevanceInput } from "../inputs/PropertyOrderByWithRelationAndSearchRelevanceInput";
import { Property_RequestOrderByWithRelationAndSearchRelevanceInput } from "../inputs/Property_RequestOrderByWithRelationAndSearchRelevanceInput";
export declare class LandSizeOrderByWithRelationAndSearchRelevanceInput {
    id?: "asc" | "desc" | undefined;
    measurement?: "asc" | "desc" | undefined;
    unit?: "asc" | "desc" | undefined;
    Property?: PropertyOrderByWithRelationAndSearchRelevanceInput | undefined;
    propertyId?: "asc" | "desc" | undefined;
    Property_Request?: Property_RequestOrderByWithRelationAndSearchRelevanceInput | undefined;
    property_RequestId?: "asc" | "desc" | undefined;
    _relevance?: LandSizeOrderByRelevanceInput | undefined;
}
