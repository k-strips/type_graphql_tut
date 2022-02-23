import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { PriceUpdateOneWithoutAdvertisementInput } from "../inputs/PriceUpdateOneWithoutAdvertisementInput";
import { PropertyUpdateOneWithoutAdvertisementInput } from "../inputs/PropertyUpdateOneWithoutAdvertisementInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneWithoutAdvertisementInput } from "../inputs/UserUpdateOneWithoutAdvertisementInput";
export declare class AdvertisementUpdateWithoutOrganizationInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    price?: PriceUpdateOneWithoutAdvertisementInput | undefined;
    isExpired?: BoolFieldUpdateOperationsInput | undefined;
    isPaused?: BoolFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    user?: UserUpdateOneWithoutAdvertisementInput | undefined;
    property?: PropertyUpdateOneWithoutAdvertisementInput | undefined;
}
