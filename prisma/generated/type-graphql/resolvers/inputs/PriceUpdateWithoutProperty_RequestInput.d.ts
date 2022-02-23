import { AdvertisementUpdateOneWithoutPriceInput } from "../inputs/AdvertisementUpdateOneWithoutPriceInput";
import { EnumCurrencyFieldUpdateOperationsInput } from "../inputs/EnumCurrencyFieldUpdateOperationsInput";
import { FloatFieldUpdateOperationsInput } from "../inputs/FloatFieldUpdateOperationsInput";
import { NullableEnumDurationFieldUpdateOperationsInput } from "../inputs/NullableEnumDurationFieldUpdateOperationsInput";
import { PropertyUpdateOneWithoutPriceInput } from "../inputs/PropertyUpdateOneWithoutPriceInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class PriceUpdateWithoutProperty_RequestInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    figure?: FloatFieldUpdateOperationsInput | undefined;
    currency?: EnumCurrencyFieldUpdateOperationsInput | undefined;
    duration?: NullableEnumDurationFieldUpdateOperationsInput | undefined;
    Property?: PropertyUpdateOneWithoutPriceInput | undefined;
    advertisement?: AdvertisementUpdateOneWithoutPriceInput | undefined;
}
