import { NestedEnumLandSizeUnitFilter } from "../inputs/NestedEnumLandSizeUnitFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
export declare class NestedEnumLandSizeUnitWithAggregatesFilter {
    equals?: "ACRE" | "PLOT" | "HECTARE" | "SQUAREMETER" | undefined;
    in?: Array<"ACRE" | "PLOT" | "HECTARE" | "SQUAREMETER"> | undefined;
    notIn?: Array<"ACRE" | "PLOT" | "HECTARE" | "SQUAREMETER"> | undefined;
    not?: NestedEnumLandSizeUnitWithAggregatesFilter | undefined;
    _count?: NestedIntFilter | undefined;
    _min?: NestedEnumLandSizeUnitFilter | undefined;
    _max?: NestedEnumLandSizeUnitFilter | undefined;
}
