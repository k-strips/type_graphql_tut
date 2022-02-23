import { AddressUpdateOneWithoutOrganizationInput } from "../inputs/AddressUpdateOneWithoutOrganizationInput";
import { AdvertisementUpdateManyWithoutOrganizationInput } from "../inputs/AdvertisementUpdateManyWithoutOrganizationInput";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateManyWithoutOrganizationInput } from "../inputs/UserUpdateManyWithoutOrganizationInput";
export declare class OrganizationUpdateWithoutPropertiesInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    title?: StringFieldUpdateOperationsInput | undefined;
    address?: AddressUpdateOneWithoutOrganizationInput | undefined;
    members?: UserUpdateManyWithoutOrganizationInput | undefined;
    advertisement?: AdvertisementUpdateManyWithoutOrganizationInput | undefined;
    isVerified?: BoolFieldUpdateOperationsInput | undefined;
    isRegistrated?: BoolFieldUpdateOperationsInput | undefined;
    isDeleted?: BoolFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
