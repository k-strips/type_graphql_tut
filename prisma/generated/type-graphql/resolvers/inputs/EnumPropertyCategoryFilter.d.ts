import { NestedEnumPropertyCategoryFilter } from "../inputs/NestedEnumPropertyCategoryFilter";
export declare class EnumPropertyCategoryFilter {
    equals?: "AGRICULTURAL_FARMLAND" | "COMMERCIAL" | "PARTIES_EVENT" | "RESIDENTIAL" | undefined;
    in?: Array<"AGRICULTURAL_FARMLAND" | "COMMERCIAL" | "PARTIES_EVENT" | "RESIDENTIAL"> | undefined;
    notIn?: Array<"AGRICULTURAL_FARMLAND" | "COMMERCIAL" | "PARTIES_EVENT" | "RESIDENTIAL"> | undefined;
    not?: NestedEnumPropertyCategoryFilter | undefined;
}
