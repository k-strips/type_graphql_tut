import { SaveCountOrderByAggregateInput } from "../inputs/SaveCountOrderByAggregateInput";
import { SaveMaxOrderByAggregateInput } from "../inputs/SaveMaxOrderByAggregateInput";
import { SaveMinOrderByAggregateInput } from "../inputs/SaveMinOrderByAggregateInput";
export declare class SaveOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    userId?: "asc" | "desc" | undefined;
    propertyId?: "asc" | "desc" | undefined;
    _count?: SaveCountOrderByAggregateInput | undefined;
    _max?: SaveMaxOrderByAggregateInput | undefined;
    _min?: SaveMinOrderByAggregateInput | undefined;
}
