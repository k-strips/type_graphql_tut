import { LandSizeAvgOrderByAggregateInput } from "../inputs/LandSizeAvgOrderByAggregateInput";
import { LandSizeCountOrderByAggregateInput } from "../inputs/LandSizeCountOrderByAggregateInput";
import { LandSizeMaxOrderByAggregateInput } from "../inputs/LandSizeMaxOrderByAggregateInput";
import { LandSizeMinOrderByAggregateInput } from "../inputs/LandSizeMinOrderByAggregateInput";
import { LandSizeSumOrderByAggregateInput } from "../inputs/LandSizeSumOrderByAggregateInput";
export declare class LandSizeOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    measurement?: "asc" | "desc" | undefined;
    unit?: "asc" | "desc" | undefined;
    propertyId?: "asc" | "desc" | undefined;
    property_RequestId?: "asc" | "desc" | undefined;
    _count?: LandSizeCountOrderByAggregateInput | undefined;
    _avg?: LandSizeAvgOrderByAggregateInput | undefined;
    _max?: LandSizeMaxOrderByAggregateInput | undefined;
    _min?: LandSizeMinOrderByAggregateInput | undefined;
    _sum?: LandSizeSumOrderByAggregateInput | undefined;
}
