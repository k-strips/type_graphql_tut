import { NestedEnumPropertyStateNullableFilter } from "../inputs/NestedEnumPropertyStateNullableFilter";
export declare class EnumPropertyStateNullableFilter {
    equals?: "FURNISHED" | "NOT_FURNISHED" | "PARTLY_FURNISHED" | undefined;
    in?: Array<"FURNISHED" | "NOT_FURNISHED" | "PARTLY_FURNISHED"> | undefined;
    notIn?: Array<"FURNISHED" | "NOT_FURNISHED" | "PARTLY_FURNISHED"> | undefined;
    not?: NestedEnumPropertyStateNullableFilter | undefined;
}
