import { EnumLandSizeUnitFieldUpdateOperationsInput } from "../inputs/EnumLandSizeUnitFieldUpdateOperationsInput";
import { FloatFieldUpdateOperationsInput } from "../inputs/FloatFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class LandSizeUpdateManyMutationInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    measurement?: FloatFieldUpdateOperationsInput | undefined;
    unit?: EnumLandSizeUnitFieldUpdateOperationsInput | undefined;
}
