import { AdvertisementCreateNestedOneWithoutPriceInput } from "../inputs/AdvertisementCreateNestedOneWithoutPriceInput";
import { PropertyCreateNestedOneWithoutPriceInput } from "../inputs/PropertyCreateNestedOneWithoutPriceInput";
import { Property_RequestCreateNestedOneWithoutPriceRangeInput } from "../inputs/Property_RequestCreateNestedOneWithoutPriceRangeInput";
export declare class PriceCreateInput {
    id?: string | undefined;
    figure: number;
    currency: "GHS" | "USD";
    duration?: "DAILY" | "WEEKLY" | "MONTHLY" | "YEARLY" | undefined;
    Property?: PropertyCreateNestedOneWithoutPriceInput | undefined;
    advertisement?: AdvertisementCreateNestedOneWithoutPriceInput | undefined;
    Property_Request?: Property_RequestCreateNestedOneWithoutPriceRangeInput | undefined;
}
