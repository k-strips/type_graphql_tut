import { NestedEnumDurationNullableFilter } from "../inputs/NestedEnumDurationNullableFilter";
import { NestedEnumDurationNullableWithAggregatesFilter } from "../inputs/NestedEnumDurationNullableWithAggregatesFilter";
import { NestedIntNullableFilter } from "../inputs/NestedIntNullableFilter";
export declare class EnumDurationNullableWithAggregatesFilter {
    equals?: "DAILY" | "WEEKLY" | "MONTHLY" | "YEARLY" | undefined;
    in?: Array<"DAILY" | "WEEKLY" | "MONTHLY" | "YEARLY"> | undefined;
    notIn?: Array<"DAILY" | "WEEKLY" | "MONTHLY" | "YEARLY"> | undefined;
    not?: NestedEnumDurationNullableWithAggregatesFilter | undefined;
    _count?: NestedIntNullableFilter | undefined;
    _min?: NestedEnumDurationNullableFilter | undefined;
    _max?: NestedEnumDurationNullableFilter | undefined;
}
