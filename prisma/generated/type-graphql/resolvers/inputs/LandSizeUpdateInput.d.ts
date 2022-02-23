import { EnumLandSizeUnitFieldUpdateOperationsInput } from "../inputs/EnumLandSizeUnitFieldUpdateOperationsInput";
import { FloatFieldUpdateOperationsInput } from "../inputs/FloatFieldUpdateOperationsInput";
import { PropertyUpdateOneWithoutSizeInput } from "../inputs/PropertyUpdateOneWithoutSizeInput";
import { Property_RequestUpdateOneWithoutSizeInput } from "../inputs/Property_RequestUpdateOneWithoutSizeInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class LandSizeUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    measurement?: FloatFieldUpdateOperationsInput | undefined;
    unit?: EnumLandSizeUnitFieldUpdateOperationsInput | undefined;
    Property?: PropertyUpdateOneWithoutSizeInput | undefined;
    Property_Request?: Property_RequestUpdateOneWithoutSizeInput | undefined;
}
