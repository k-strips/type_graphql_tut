import { EnumCurrencyFieldUpdateOperationsInput } from "../inputs/EnumCurrencyFieldUpdateOperationsInput";
import { FloatFieldUpdateOperationsInput } from "../inputs/FloatFieldUpdateOperationsInput";
import { NullableEnumDurationFieldUpdateOperationsInput } from "../inputs/NullableEnumDurationFieldUpdateOperationsInput";
import { PropertyUpdateOneWithoutPriceInput } from "../inputs/PropertyUpdateOneWithoutPriceInput";
import { Property_RequestUpdateOneWithoutPriceRangeInput } from "../inputs/Property_RequestUpdateOneWithoutPriceRangeInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class PriceUpdateWithoutAdvertisementInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    figure?: FloatFieldUpdateOperationsInput | undefined;
    currency?: EnumCurrencyFieldUpdateOperationsInput | undefined;
    duration?: NullableEnumDurationFieldUpdateOperationsInput | undefined;
    Property?: PropertyUpdateOneWithoutPriceInput | undefined;
    Property_Request?: Property_RequestUpdateOneWithoutPriceRangeInput | undefined;
}
