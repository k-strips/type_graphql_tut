import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumAcquisitionTypeFieldUpdateOperationsInput } from "../inputs/EnumAcquisitionTypeFieldUpdateOperationsInput";
import { EnumPropertyTypeFieldUpdateOperationsInput } from "../inputs/EnumPropertyTypeFieldUpdateOperationsInput";
import { NullableEnumPropertyStateFieldUpdateOperationsInput } from "../inputs/NullableEnumPropertyStateFieldUpdateOperationsInput";
import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { PriceUpdateManyWithoutProperty_RequestInput } from "../inputs/PriceUpdateManyWithoutProperty_RequestInput";
import { Property_RequestUpdateamenitiesInput } from "../inputs/Property_RequestUpdateamenitiesInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneWithoutRequestInput } from "../inputs/UserUpdateOneWithoutRequestInput";
export declare class Property_RequestUpdateWithoutSizeInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    type?: EnumPropertyTypeFieldUpdateOperationsInput | undefined;
    acquisition?: EnumAcquisitionTypeFieldUpdateOperationsInput | undefined;
    state?: NullableEnumPropertyStateFieldUpdateOperationsInput | undefined;
    priceRange?: PriceUpdateManyWithoutProperty_RequestInput | undefined;
    amenities?: Property_RequestUpdateamenitiesInput | undefined;
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
