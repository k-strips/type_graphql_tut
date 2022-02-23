import { NestedEnumAcquisitionTypeNullableFilter } from "../inputs/NestedEnumAcquisitionTypeNullableFilter";
import { NestedIntNullableFilter } from "../inputs/NestedIntNullableFilter";
export declare class NestedEnumAcquisitionTypeNullableWithAggregatesFilter {
    equals?: "BUY" | "RENT" | "SHORT_STAY" | "LONG_STAY" | undefined;
    in?: Array<"BUY" | "RENT" | "SHORT_STAY" | "LONG_STAY"> | undefined;
    notIn?: Array<"BUY" | "RENT" | "SHORT_STAY" | "LONG_STAY"> | undefined;
    not?: NestedEnumAcquisitionTypeNullableWithAggregatesFilter | undefined;
    _count?: NestedIntNullableFilter | undefined;
    _min?: NestedEnumAcquisitionTypeNullableFilter | undefined;
    _max?: NestedEnumAcquisitionTypeNullableFilter | undefined;
}
