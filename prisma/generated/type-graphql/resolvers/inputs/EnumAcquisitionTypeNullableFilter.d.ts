import { NestedEnumAcquisitionTypeNullableFilter } from "../inputs/NestedEnumAcquisitionTypeNullableFilter";
export declare class EnumAcquisitionTypeNullableFilter {
    equals?: "BUY" | "RENT" | "SHORT_STAY" | "LONG_STAY" | undefined;
    in?: Array<"BUY" | "RENT" | "SHORT_STAY" | "LONG_STAY"> | undefined;
    notIn?: Array<"BUY" | "RENT" | "SHORT_STAY" | "LONG_STAY"> | undefined;
    not?: NestedEnumAcquisitionTypeNullableFilter | undefined;
}
