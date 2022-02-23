import { PropertyOrderByWithRelationAndSearchRelevanceInput } from "../inputs/PropertyOrderByWithRelationAndSearchRelevanceInput";
import { SaveOrderByRelevanceInput } from "../inputs/SaveOrderByRelevanceInput";
import { UserOrderByWithRelationAndSearchRelevanceInput } from "../inputs/UserOrderByWithRelationAndSearchRelevanceInput";
export declare class SaveOrderByWithRelationAndSearchRelevanceInput {
    id?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    User?: UserOrderByWithRelationAndSearchRelevanceInput | undefined;
    userId?: "asc" | "desc" | undefined;
    Property?: PropertyOrderByWithRelationAndSearchRelevanceInput | undefined;
    propertyId?: "asc" | "desc" | undefined;
    _relevance?: SaveOrderByRelevanceInput | undefined;
}
