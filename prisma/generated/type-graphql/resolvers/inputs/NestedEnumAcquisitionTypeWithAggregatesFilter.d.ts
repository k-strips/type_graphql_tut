import { NestedEnumAcquisitionTypeFilter } from "../inputs/NestedEnumAcquisitionTypeFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
export declare class NestedEnumAcquisitionTypeWithAggregatesFilter {
    equals?: "BUY" | "RENT" | "SHORT_STAY" | "LONG_STAY" | undefined;
    in?: Array<"BUY" | "RENT" | "SHORT_STAY" | "LONG_STAY"> | undefined;
    notIn?: Array<"BUY" | "RENT" | "SHORT_STAY" | "LONG_STAY"> | undefined;
    not?: NestedEnumAcquisitionTypeWithAggregatesFilter | undefined;
    _count?: NestedIntFilter | undefined;
    _min?: NestedEnumAcquisitionTypeFilter | undefined;
    _max?: NestedEnumAcquisitionTypeFilter | undefined;
}
