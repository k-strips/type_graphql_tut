import { NestedEnumPropertyStateNullableFilter } from "../inputs/NestedEnumPropertyStateNullableFilter";
import { NestedEnumPropertyStateNullableWithAggregatesFilter } from "../inputs/NestedEnumPropertyStateNullableWithAggregatesFilter";
import { NestedIntNullableFilter } from "../inputs/NestedIntNullableFilter";
export declare class EnumPropertyStateNullableWithAggregatesFilter {
    equals?: "FURNISHED" | "NOT_FURNISHED" | "PARTLY_FURNISHED" | undefined;
    in?: Array<"FURNISHED" | "NOT_FURNISHED" | "PARTLY_FURNISHED"> | undefined;
    notIn?: Array<"FURNISHED" | "NOT_FURNISHED" | "PARTLY_FURNISHED"> | undefined;
    not?: NestedEnumPropertyStateNullableWithAggregatesFilter | undefined;
    _count?: NestedIntNullableFilter | undefined;
    _min?: NestedEnumPropertyStateNullableFilter | undefined;
    _max?: NestedEnumPropertyStateNullableFilter | undefined;
}
