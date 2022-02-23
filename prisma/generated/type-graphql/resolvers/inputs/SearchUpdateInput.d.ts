import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumPropertyCategoryFieldUpdateOperationsInput } from "../inputs/EnumPropertyCategoryFieldUpdateOperationsInput";
import { NullableEnumAcquisitionTypeFieldUpdateOperationsInput } from "../inputs/NullableEnumAcquisitionTypeFieldUpdateOperationsInput";
import { NullableEnumPropertyStateFieldUpdateOperationsInput } from "../inputs/NullableEnumPropertyStateFieldUpdateOperationsInput";
import { NullableEnumPropertyTypeFieldUpdateOperationsInput } from "../inputs/NullableEnumPropertyTypeFieldUpdateOperationsInput";
import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class SearchUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    userId?: StringFieldUpdateOperationsInput | undefined;
    category?: EnumPropertyCategoryFieldUpdateOperationsInput | undefined;
    type?: NullableEnumPropertyTypeFieldUpdateOperationsInput | undefined;
    acquisition?: NullableEnumAcquisitionTypeFieldUpdateOperationsInput | undefined;
    seating?: NullableIntFieldUpdateOperationsInput | undefined;
    state?: NullableEnumPropertyStateFieldUpdateOperationsInput | undefined;
    bedrooms?: NullableIntFieldUpdateOperationsInput | undefined;
    bathrooms?: NullableIntFieldUpdateOperationsInput | undefined;
    parkingCapacity?: NullableIntFieldUpdateOperationsInput | undefined;
    location?: NullableStringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
