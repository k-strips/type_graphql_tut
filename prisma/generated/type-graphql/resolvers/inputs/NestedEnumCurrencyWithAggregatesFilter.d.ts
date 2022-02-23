import { NestedEnumCurrencyFilter } from "../inputs/NestedEnumCurrencyFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
export declare class NestedEnumCurrencyWithAggregatesFilter {
    equals?: "GHS" | "USD" | undefined;
    in?: Array<"GHS" | "USD"> | undefined;
    notIn?: Array<"GHS" | "USD"> | undefined;
    not?: NestedEnumCurrencyWithAggregatesFilter | undefined;
    _count?: NestedIntFilter | undefined;
    _min?: NestedEnumCurrencyFilter | undefined;
    _max?: NestedEnumCurrencyFilter | undefined;
}
