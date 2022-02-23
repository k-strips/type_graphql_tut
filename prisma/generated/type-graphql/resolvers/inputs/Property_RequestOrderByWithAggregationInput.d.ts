import { Property_RequestAvgOrderByAggregateInput } from "../inputs/Property_RequestAvgOrderByAggregateInput";
import { Property_RequestCountOrderByAggregateInput } from "../inputs/Property_RequestCountOrderByAggregateInput";
import { Property_RequestMaxOrderByAggregateInput } from "../inputs/Property_RequestMaxOrderByAggregateInput";
import { Property_RequestMinOrderByAggregateInput } from "../inputs/Property_RequestMinOrderByAggregateInput";
import { Property_RequestSumOrderByAggregateInput } from "../inputs/Property_RequestSumOrderByAggregateInput";
export declare class Property_RequestOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    type?: "asc" | "desc" | undefined;
    acquisition?: "asc" | "desc" | undefined;
    state?: "asc" | "desc" | undefined;
    amenities?: "asc" | "desc" | undefined;
    parkingCapacity?: "asc" | "desc" | undefined;
    seating?: "asc" | "desc" | undefined;
    bedrooms?: "asc" | "desc" | undefined;
    bathrooms?: "asc" | "desc" | undefined;
    additionalInfo?: "asc" | "desc" | undefined;
    region?: "asc" | "desc" | undefined;
    city?: "asc" | "desc" | undefined;
    town?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    userId?: "asc" | "desc" | undefined;
    _count?: Property_RequestCountOrderByAggregateInput | undefined;
    _avg?: Property_RequestAvgOrderByAggregateInput | undefined;
    _max?: Property_RequestMaxOrderByAggregateInput | undefined;
    _min?: Property_RequestMinOrderByAggregateInput | undefined;
    _sum?: Property_RequestSumOrderByAggregateInput | undefined;
}
