import { AdvertisementCreateNestedOneWithoutPriceInput } from "../inputs/AdvertisementCreateNestedOneWithoutPriceInput";
import { Property_RequestCreateNestedOneWithoutPriceRangeInput } from "../inputs/Property_RequestCreateNestedOneWithoutPriceRangeInput";
export declare class PriceCreateWithoutPropertyInput {
    id?: string | undefined;
    figure: number;
    currency: "GHS" | "USD";
    duration?: "DAILY" | "WEEKLY" | "MONTHLY" | "YEARLY" | undefined;
    advertisement?: AdvertisementCreateNestedOneWithoutPriceInput | undefined;
    Property_Request?: Property_RequestCreateNestedOneWithoutPriceRangeInput | undefined;
}
