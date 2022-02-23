import { NestedEnumCurrencyFilter } from "../inputs/NestedEnumCurrencyFilter";
export declare class EnumCurrencyFilter {
    equals?: "GHS" | "USD" | undefined;
    in?: Array<"GHS" | "USD"> | undefined;
    notIn?: Array<"GHS" | "USD"> | undefined;
    not?: NestedEnumCurrencyFilter | undefined;
}
