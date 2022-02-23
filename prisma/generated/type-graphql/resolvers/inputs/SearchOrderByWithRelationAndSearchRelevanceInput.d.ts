import { SearchOrderByRelevanceInput } from "../inputs/SearchOrderByRelevanceInput";
export declare class SearchOrderByWithRelationAndSearchRelevanceInput {
    id?: "asc" | "desc" | undefined;
    userId?: "asc" | "desc" | undefined;
    category?: "asc" | "desc" | undefined;
    type?: "asc" | "desc" | undefined;
    acquisition?: "asc" | "desc" | undefined;
    seating?: "asc" | "desc" | undefined;
    state?: "asc" | "desc" | undefined;
    bedrooms?: "asc" | "desc" | undefined;
    bathrooms?: "asc" | "desc" | undefined;
    parkingCapacity?: "asc" | "desc" | undefined;
    location?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    _relevance?: SearchOrderByRelevanceInput | undefined;
}
