import { EnumLandSizeUnitFieldUpdateOperationsInput } from "../inputs/EnumLandSizeUnitFieldUpdateOperationsInput";
import { FloatFieldUpdateOperationsInput } from "../inputs/FloatFieldUpdateOperationsInput";
import { PropertyUpdateOneWithoutSizeInput } from "../inputs/PropertyUpdateOneWithoutSizeInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class LandSizeUpdateWithoutProperty_RequestInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    measurement?: FloatFieldUpdateOperationsInput | undefined;
    unit?: EnumLandSizeUnitFieldUpdateOperationsInput | undefined;
    Property?: PropertyUpdateOneWithoutSizeInput | undefined;
}
