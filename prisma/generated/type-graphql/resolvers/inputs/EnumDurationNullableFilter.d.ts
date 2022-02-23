import { NestedEnumDurationNullableFilter } from "../inputs/NestedEnumDurationNullableFilter";
export declare class EnumDurationNullableFilter {
    equals?: "DAILY" | "WEEKLY" | "MONTHLY" | "YEARLY" | undefined;
    in?: Array<"DAILY" | "WEEKLY" | "MONTHLY" | "YEARLY"> | undefined;
    notIn?: Array<"DAILY" | "WEEKLY" | "MONTHLY" | "YEARLY"> | undefined;
    not?: NestedEnumDurationNullableFilter | undefined;
}
