import { AdvertisementUpdateOneWithoutPriceInput } from "../inputs/AdvertisementUpdateOneWithoutPriceInput";
import { EnumCurrencyFieldUpdateOperationsInput } from "../inputs/EnumCurrencyFieldUpdateOperationsInput";
import { FloatFieldUpdateOperationsInput } from "../inputs/FloatFieldUpdateOperationsInput";
import { NullableEnumDurationFieldUpdateOperationsInput } from "../inputs/NullableEnumDurationFieldUpdateOperationsInput";
import { Property_RequestUpdateOneWithoutPriceRangeInput } from "../inputs/Property_RequestUpdateOneWithoutPriceRangeInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class PriceUpdateWithoutPropertyInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    figure?: FloatFieldUpdateOperationsInput | undefined;
    currency?: EnumCurrencyFieldUpdateOperationsInput | undefined;
    duration?: NullableEnumDurationFieldUpdateOperationsInput | undefined;
    advertisement?: AdvertisementUpdateOneWithoutPriceInput | undefined;
    Property_Request?: Property_RequestUpdateOneWithoutPriceRangeInput | undefined;
}
