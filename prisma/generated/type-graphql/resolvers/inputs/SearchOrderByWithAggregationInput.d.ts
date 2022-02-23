import { SearchAvgOrderByAggregateInput } from "../inputs/SearchAvgOrderByAggregateInput";
import { SearchCountOrderByAggregateInput } from "../inputs/SearchCountOrderByAggregateInput";
import { SearchMaxOrderByAggregateInput } from "../inputs/SearchMaxOrderByAggregateInput";
import { SearchMinOrderByAggregateInput } from "../inputs/SearchMinOrderByAggregateInput";
import { SearchSumOrderByAggregateInput } from "../inputs/SearchSumOrderByAggregateInput";
export declare class SearchOrderByWithAggregationInput {
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
    _count?: SearchCountOrderByAggregateInput | undefined;
    _avg?: SearchAvgOrderByAggregateInput | undefined;
    _max?: SearchMaxOrderByAggregateInput | undefined;
    _min?: SearchMinOrderByAggregateInput | undefined;
    _sum?: SearchSumOrderByAggregateInput | undefined;
}
