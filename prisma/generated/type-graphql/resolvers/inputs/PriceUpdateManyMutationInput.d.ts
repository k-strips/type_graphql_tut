import { EnumCurrencyFieldUpdateOperationsInput } from "../inputs/EnumCurrencyFieldUpdateOperationsInput";
import { FloatFieldUpdateOperationsInput } from "../inputs/FloatFieldUpdateOperationsInput";
import { NullableEnumDurationFieldUpdateOperationsInput } from "../inputs/NullableEnumDurationFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class PriceUpdateManyMutationInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    figure?: FloatFieldUpdateOperationsInput | undefined;
    currency?: EnumCurrencyFieldUpdateOperationsInput | undefined;
    duration?: NullableEnumDurationFieldUpdateOperationsInput | undefined;
}
