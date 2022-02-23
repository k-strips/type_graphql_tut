import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { PropertyUpdateOneWithoutLikesInput } from "../inputs/PropertyUpdateOneWithoutLikesInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class SaveUpdateWithoutUserInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    Property?: PropertyUpdateOneWithoutLikesInput | undefined;
}
