import { NestedEnumLandSizeUnitFilter } from "../inputs/NestedEnumLandSizeUnitFilter";
export declare class EnumLandSizeUnitFilter {
    equals?: "ACRE" | "PLOT" | "HECTARE" | "SQUAREMETER" | undefined;
    in?: Array<"ACRE" | "PLOT" | "HECTARE" | "SQUAREMETER"> | undefined;
    notIn?: Array<"ACRE" | "PLOT" | "HECTARE" | "SQUAREMETER"> | undefined;
    not?: NestedEnumLandSizeUnitFilter | undefined;
}
