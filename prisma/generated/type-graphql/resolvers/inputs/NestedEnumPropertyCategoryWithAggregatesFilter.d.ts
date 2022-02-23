import { NestedEnumPropertyCategoryFilter } from "../inputs/NestedEnumPropertyCategoryFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
export declare class NestedEnumPropertyCategoryWithAggregatesFilter {
    equals?: "AGRICULTURAL_FARMLAND" | "COMMERCIAL" | "PARTIES_EVENT" | "RESIDENTIAL" | undefined;
    in?: Array<"AGRICULTURAL_FARMLAND" | "COMMERCIAL" | "PARTIES_EVENT" | "RESIDENTIAL"> | undefined;
    notIn?: Array<"AGRICULTURAL_FARMLAND" | "COMMERCIAL" | "PARTIES_EVENT" | "RESIDENTIAL"> | undefined;
    not?: NestedEnumPropertyCategoryWithAggregatesFilter | undefined;
    _count?: NestedIntFilter | undefined;
    _min?: NestedEnumPropertyCategoryFilter | undefined;
    _max?: NestedEnumPropertyCategoryFilter | undefined;
}
