import { PriceAvgOrderByAggregateInput } from "../inputs/PriceAvgOrderByAggregateInput";
import { PriceCountOrderByAggregateInput } from "../inputs/PriceCountOrderByAggregateInput";
import { PriceMaxOrderByAggregateInput } from "../inputs/PriceMaxOrderByAggregateInput";
import { PriceMinOrderByAggregateInput } from "../inputs/PriceMinOrderByAggregateInput";
import { PriceSumOrderByAggregateInput } from "../inputs/PriceSumOrderByAggregateInput";
export declare class PriceOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    figure?: "asc" | "desc" | undefined;
    currency?: "asc" | "desc" | undefined;
    duration?: "asc" | "desc" | undefined;
    propertyId?: "asc" | "desc" | undefined;
    advertisementId?: "asc" | "desc" | undefined;
    property_RequestId?: "asc" | "desc" | undefined;
    _count?: PriceCountOrderByAggregateInput | undefined;
    _avg?: PriceAvgOrderByAggregateInput | undefined;
    _max?: PriceMaxOrderByAggregateInput | undefined;
    _min?: PriceMinOrderByAggregateInput | undefined;
    _sum?: PriceSumOrderByAggregateInput | undefined;
}
