import { NestedEnumAcquisitionTypeFilter } from "../inputs/NestedEnumAcquisitionTypeFilter";
export declare class EnumAcquisitionTypeFilter {
    equals?: "BUY" | "RENT" | "SHORT_STAY" | "LONG_STAY" | undefined;
    in?: Array<"BUY" | "RENT" | "SHORT_STAY" | "LONG_STAY"> | undefined;
    notIn?: Array<"BUY" | "RENT" | "SHORT_STAY" | "LONG_STAY"> | undefined;
    not?: NestedEnumAcquisitionTypeFilter | undefined;
}
