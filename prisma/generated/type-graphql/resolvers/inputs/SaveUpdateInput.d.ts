import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { PropertyUpdateOneWithoutLikesInput } from "../inputs/PropertyUpdateOneWithoutLikesInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneWithoutSavesInput } from "../inputs/UserUpdateOneWithoutSavesInput";
export declare class SaveUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    User?: UserUpdateOneWithoutSavesInput | undefined;
    Property?: PropertyUpdateOneWithoutLikesInput | undefined;
}
