import { EnumLandSizeUnitFieldUpdateOperationsInput } from "../inputs/EnumLandSizeUnitFieldUpdateOperationsInput";
import { FloatFieldUpdateOperationsInput } from "../inputs/FloatFieldUpdateOperationsInput";
import { Property_RequestUpdateOneWithoutSizeInput } from "../inputs/Property_RequestUpdateOneWithoutSizeInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class LandSizeUpdateWithoutPropertyInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    measurement?: FloatFieldUpdateOperationsInput | undefined;
    unit?: EnumLandSizeUnitFieldUpdateOperationsInput | undefined;
    Property_Request?: Property_RequestUpdateOneWithoutSizeInput | undefined;
}
