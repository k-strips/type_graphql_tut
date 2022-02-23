import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumAcquisitionTypeFieldUpdateOperationsInput } from "../inputs/EnumAcquisitionTypeFieldUpdateOperationsInput";
import { EnumPropertyTypeFieldUpdateOperationsInput } from "../inputs/EnumPropertyTypeFieldUpdateOperationsInput";
import { LandSizeUpdateOneWithoutProperty_RequestInput } from "../inputs/LandSizeUpdateOneWithoutProperty_RequestInput";
import { NullableEnumPropertyStateFieldUpdateOperationsInput } from "../inputs/NullableEnumPropertyStateFieldUpdateOperationsInput";
import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { Property_RequestUpdateamenitiesInput } from "../inputs/Property_RequestUpdateamenitiesInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneWithoutRequestInput } from "../inputs/UserUpdateOneWithoutRequestInput";
export declare class Property_RequestUpdateWithoutPriceRangeInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    type?: EnumPropertyTypeFieldUpdateOperationsInput | undefined;
    acquisition?: EnumAcquisitionTypeFieldUpdateOperationsInput | undefined;
    state?: NullableEnumPropertyStateFieldUpdateOperationsInput | undefined;
    amenities?: Property_RequestUpdateamenitiesInput | undefined;
    size?: LandSizeUpdateOneWithoutProperty_RequestInput | undefined;
    parkingCapacity?: NullableIntFieldUpdateOperationsInput | undefined;
    seating?: NullableIntFieldUpdateOperationsInput | undefined;
    bedrooms?: NullableIntFieldUpdateOperationsInput | undefined;
    bathrooms?: NullableIntFieldUpdateOperationsInput | undefined;
    additionalInfo?: NullableStringFieldUpdateOperationsInput | undefined;
    region?: NullableStringFieldUpdateOperationsInput | undefined;
    city?: NullableStringFieldUpdateOperationsInput | undefined;
    town?: NullableStringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    user?: UserUpdateOneWithoutRequestInput | undefined;
}
