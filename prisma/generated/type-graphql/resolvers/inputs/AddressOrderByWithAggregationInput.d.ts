import { AddressCountOrderByAggregateInput } from "../inputs/AddressCountOrderByAggregateInput";
import { AddressMaxOrderByAggregateInput } from "../inputs/AddressMaxOrderByAggregateInput";
import { AddressMinOrderByAggregateInput } from "../inputs/AddressMinOrderByAggregateInput";
export declare class AddressOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    email?: "asc" | "desc" | undefined;
    mobile?: "asc" | "desc" | undefined;
    work?: "asc" | "desc" | undefined;
    office?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    organizationId?: "asc" | "desc" | undefined;
    userId?: "asc" | "desc" | undefined;
    _count?: AddressCountOrderByAggregateInput | undefined;
    _max?: AddressMaxOrderByAggregateInput | undefined;
    _min?: AddressMinOrderByAggregateInput | undefined;
}
