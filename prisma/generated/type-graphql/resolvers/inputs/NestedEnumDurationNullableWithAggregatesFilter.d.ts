import { NestedEnumDurationNullableFilter } from "../inputs/NestedEnumDurationNullableFilter";
import { NestedIntNullableFilter } from "../inputs/NestedIntNullableFilter";
export declare class NestedEnumDurationNullableWithAggregatesFilter {
    equals?: "DAILY" | "WEEKLY" | "MONTHLY" | "YEARLY" | undefined;
    in?: Array<"DAILY" | "WEEKLY" | "MONTHLY" | "YEARLY"> | undefined;
    notIn?: Array<"DAILY" | "WEEKLY" | "MONTHLY" | "YEARLY"> | undefined;
    not?: NestedEnumDurationNullableWithAggregatesFilter | undefined;
    _count?: NestedIntNullableFilter | undefined;
    _min?: NestedEnumDurationNullableFilter | undefined;
    _max?: NestedEnumDurationNullableFilter | undefined;
}
