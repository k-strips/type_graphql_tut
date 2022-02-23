import { NestedEnumLandSizeUnitFilter } from "../inputs/NestedEnumLandSizeUnitFilter";
import { NestedEnumLandSizeUnitWithAggregatesFilter } from "../inputs/NestedEnumLandSizeUnitWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
export declare class EnumLandSizeUnitWithAggregatesFilter {
    equals?: "ACRE" | "PLOT" | "HECTARE" | "SQUAREMETER" | undefined;
    in?: Array<"ACRE" | "PLOT" | "HECTARE" | "SQUAREMETER"> | undefined;
    notIn?: Array<"ACRE" | "PLOT" | "HECTARE" | "SQUAREMETER"> | undefined;
    not?: NestedEnumLandSizeUnitWithAggregatesFilter | undefined;
    _count?: NestedIntFilter | undefined;
    _min?: NestedEnumLandSizeUnitFilter | undefined;
    _max?: NestedEnumLandSizeUnitFilter | undefined;
}
