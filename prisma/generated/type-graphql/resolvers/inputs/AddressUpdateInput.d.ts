import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { OrganizationUpdateOneWithoutAddressInput } from "../inputs/OrganizationUpdateOneWithoutAddressInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneWithoutAddressInput } from "../inputs/UserUpdateOneWithoutAddressInput";
export declare class AddressUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    email?: StringFieldUpdateOperationsInput | undefined;
    mobile?: NullableStringFieldUpdateOperationsInput | undefined;
    work?: NullableStringFieldUpdateOperationsInput | undefined;
    office?: NullableStringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    Organization?: OrganizationUpdateOneWithoutAddressInput | undefined;
    User?: UserUpdateOneWithoutAddressInput | undefined;
}
