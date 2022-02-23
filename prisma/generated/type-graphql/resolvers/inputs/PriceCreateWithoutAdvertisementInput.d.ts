import { PropertyCreateNestedOneWithoutPriceInput } from "../inputs/PropertyCreateNestedOneWithoutPriceInput";
import { Property_RequestCreateNestedOneWithoutPriceRangeInput } from "../inputs/Property_RequestCreateNestedOneWithoutPriceRangeInput";
export declare class PriceCreateWithoutAdvertisementInput {
    id?: string | undefined;
    figure: number;
    currency: "GHS" | "USD";
    duration?: "DAILY" | "WEEKLY" | "MONTHLY" | "YEARLY" | undefined;
    Property?: PropertyCreateNestedOneWithoutPriceInput | undefined;
    Property_Request?: Property_RequestCreateNestedOneWithoutPriceRangeInput | undefined;
}
