import { AddressUpdateOneWithoutOrganizationInput } from "../inputs/AddressUpdateOneWithoutOrganizationInput";
import { AdvertisementUpdateManyWithoutOrganizationInput } from "../inputs/AdvertisementUpdateManyWithoutOrganizationInput";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { PropertyUpdateManyWithoutOrganizationInput } from "../inputs/PropertyUpdateManyWithoutOrganizationInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class OrganizationUpdateWithoutMembersInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    title?: StringFieldUpdateOperationsInput | undefined;
    address?: AddressUpdateOneWithoutOrganizationInput | undefined;
    properties?: PropertyUpdateManyWithoutOrganizationInput | undefined;
    advertisement?: AdvertisementUpdateManyWithoutOrganizationInput | undefined;
    isVerified?: BoolFieldUpdateOperationsInput | undefined;
    isRegistrated?: BoolFieldUpdateOperationsInput | undefined;
    isDeleted?: BoolFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
