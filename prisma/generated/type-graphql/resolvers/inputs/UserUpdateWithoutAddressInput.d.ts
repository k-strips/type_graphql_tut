import { AdvertisementUpdateManyWithoutUserInput } from "../inputs/AdvertisementUpdateManyWithoutUserInput";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumUserStatusFieldUpdateOperationsInput } from "../inputs/EnumUserStatusFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { OrganizationUpdateOneWithoutMembersInput } from "../inputs/OrganizationUpdateOneWithoutMembersInput";
import { PropertyUpdateManyWithoutOwnerInput } from "../inputs/PropertyUpdateManyWithoutOwnerInput";
import { Property_RequestUpdateManyWithoutUserInput } from "../inputs/Property_RequestUpdateManyWithoutUserInput";
import { SaveUpdateManyWithoutUserInput } from "../inputs/SaveUpdateManyWithoutUserInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class UserUpdateWithoutAddressInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    firstName?: StringFieldUpdateOperationsInput | undefined;
    lastName?: StringFieldUpdateOperationsInput | undefined;
    middleName?: NullableStringFieldUpdateOperationsInput | undefined;
    status?: EnumUserStatusFieldUpdateOperationsInput | undefined;
    property?: PropertyUpdateManyWithoutOwnerInput | undefined;
    saves?: SaveUpdateManyWithoutUserInput | undefined;
    advertisement?: AdvertisementUpdateManyWithoutUserInput | undefined;
    request?: Property_RequestUpdateManyWithoutUserInput | undefined;
    isVerified?: BoolFieldUpdateOperationsInput | undefined;
    isRegistrated?: BoolFieldUpdateOperationsInput | undefined;
    isDeleted?: BoolFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    organization?: OrganizationUpdateOneWithoutMembersInput | undefined;
}
