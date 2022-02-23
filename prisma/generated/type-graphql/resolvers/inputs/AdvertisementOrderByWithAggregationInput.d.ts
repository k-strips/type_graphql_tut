import { AdvertisementCountOrderByAggregateInput } from "../inputs/AdvertisementCountOrderByAggregateInput";
import { AdvertisementMaxOrderByAggregateInput } from "../inputs/AdvertisementMaxOrderByAggregateInput";
import { AdvertisementMinOrderByAggregateInput } from "../inputs/AdvertisementMinOrderByAggregateInput";
export declare class AdvertisementOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    isExpired?: "asc" | "desc" | undefined;
    isPaused?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    userId?: "asc" | "desc" | undefined;
    organizationId?: "asc" | "desc" | undefined;
    propertyId?: "asc" | "desc" | undefined;
    _count?: AdvertisementCountOrderByAggregateInput | undefined;
    _max?: AdvertisementMaxOrderByAggregateInput | undefined;
    _min?: AdvertisementMinOrderByAggregateInput | undefined;
}
