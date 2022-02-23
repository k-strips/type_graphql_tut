import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { OrganizationUpdateOneWithoutAdvertisementInput } from "../inputs/OrganizationUpdateOneWithoutAdvertisementInput";
import { PriceUpdateOneWithoutAdvertisementInput } from "../inputs/PriceUpdateOneWithoutAdvertisementInput";
import { PropertyUpdateOneWithoutAdvertisementInput } from "../inputs/PropertyUpdateOneWithoutAdvertisementInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneWithoutAdvertisementInput } from "../inputs/UserUpdateOneWithoutAdvertisementInput";
export declare class AdvertisementUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    price?: PriceUpdateOneWithoutAdvertisementInput | undefined;
    isExpired?: BoolFieldUpdateOperationsInput | undefined;
    isPaused?: BoolFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    user?: UserUpdateOneWithoutAdvertisementInput | undefined;
    organization?: OrganizationUpdateOneWithoutAdvertisementInput | undefined;
    property?: PropertyUpdateOneWithoutAdvertisementInput | undefined;
}
