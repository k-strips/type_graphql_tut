import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { OrganizationUpdateOneWithoutAdvertisementInput } from "../inputs/OrganizationUpdateOneWithoutAdvertisementInput";
import { PropertyUpdateOneWithoutAdvertisementInput } from "../inputs/PropertyUpdateOneWithoutAdvertisementInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneWithoutAdvertisementInput } from "../inputs/UserUpdateOneWithoutAdvertisementInput";
export declare class AdvertisementUpdateWithoutPriceInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    isExpired?: BoolFieldUpdateOperationsInput | undefined;
    isPaused?: BoolFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    user?: UserUpdateOneWithoutAdvertisementInput | undefined;
    organization?: OrganizationUpdateOneWithoutAdvertisementInput | undefined;
    property?: PropertyUpdateOneWithoutAdvertisementInput | undefined;
}
