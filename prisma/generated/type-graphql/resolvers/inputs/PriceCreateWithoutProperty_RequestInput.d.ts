import { AdvertisementCreateNestedOneWithoutPriceInput } from "../inputs/AdvertisementCreateNestedOneWithoutPriceInput";
import { PropertyCreateNestedOneWithoutPriceInput } from "../inputs/PropertyCreateNestedOneWithoutPriceInput";
export declare class PriceCreateWithoutProperty_RequestInput {
    id?: string | undefined;
    figure: number;
    currency: "GHS" | "USD";
    duration?: "DAILY" | "WEEKLY" | "MONTHLY" | "YEARLY" | undefined;
    Property?: PropertyCreateNestedOneWithoutPriceInput | undefined;
    advertisement?: AdvertisementCreateNestedOneWithoutPriceInput | undefined;
}
