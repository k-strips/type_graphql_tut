import { LocationAvgOrderByAggregateInput } from "../inputs/LocationAvgOrderByAggregateInput";
import { LocationCountOrderByAggregateInput } from "../inputs/LocationCountOrderByAggregateInput";
import { LocationMaxOrderByAggregateInput } from "../inputs/LocationMaxOrderByAggregateInput";
import { LocationMinOrderByAggregateInput } from "../inputs/LocationMinOrderByAggregateInput";
import { LocationSumOrderByAggregateInput } from "../inputs/LocationSumOrderByAggregateInput";
export declare class LocationOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    region?: "asc" | "desc" | undefined;
    city?: "asc" | "desc" | undefined;
    locationInfo?: "asc" | "desc" | undefined;
    electricitySupplyRating?: "asc" | "desc" | undefined;
    waterSupplyRating?: "asc" | "desc" | undefined;
    noiseLevelSupplyRating?: "asc" | "desc" | undefined;
    crimeSupplpyRating?: "asc" | "desc" | undefined;
    recreationalRating?: "asc" | "desc" | undefined;
    trafficRating?: "asc" | "desc" | undefined;
    lat?: "asc" | "desc" | undefined;
    lon?: "asc" | "desc" | undefined;
    _count?: LocationCountOrderByAggregateInput | undefined;
    _avg?: LocationAvgOrderByAggregateInput | undefined;
    _max?: LocationMaxOrderByAggregateInput | undefined;
    _min?: LocationMinOrderByAggregateInput | undefined;
    _sum?: LocationSumOrderByAggregateInput | undefined;
}
