import { AdvertisementUpdateManyWithoutPropertyInput } from "../inputs/AdvertisementUpdateManyWithoutPropertyInput";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumAcquisitionTypeFieldUpdateOperationsInput } from "../inputs/EnumAcquisitionTypeFieldUpdateOperationsInput";
import { EnumPropertyTypeFieldUpdateOperationsInput } from "../inputs/EnumPropertyTypeFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { LandSizeUpdateOneWithoutPropertyInput } from "../inputs/LandSizeUpdateOneWithoutPropertyInput";
import { NullableEnumPropertyStateFieldUpdateOperationsInput } from "../inputs/NullableEnumPropertyStateFieldUpdateOperationsInput";
import { NullableFloatFieldUpdateOperationsInput } from "../inputs/NullableFloatFieldUpdateOperationsInput";
import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { OrganizationUpdateOneWithoutPropertiesInput } from "../inputs/OrganizationUpdateOneWithoutPropertiesInput";
import { PropertyUpdateamenitiesInput } from "../inputs/PropertyUpdateamenitiesInput";
import { PropertyUpdateimagesInput } from "../inputs/PropertyUpdateimagesInput";
import { SaveUpdateManyWithoutPropertyInput } from "../inputs/SaveUpdateManyWithoutPropertyInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneWithoutPropertyInput } from "../inputs/UserUpdateOneWithoutPropertyInput";
export declare class PropertyUpdateWithoutPriceInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    type?: EnumPropertyTypeFieldUpdateOperationsInput | undefined;
    acquisition?: EnumAcquisitionTypeFieldUpdateOperationsInput | undefined;
    state?: NullableEnumPropertyStateFieldUpdateOperationsInput | undefined;
    size?: LandSizeUpdateOneWithoutPropertyInput | undefined;
    images?: PropertyUpdateimagesInput | undefined;
    amenities?: PropertyUpdateamenitiesInput | undefined;
    parkingCapacity?: NullableIntFieldUpdateOperationsInput | undefined;
    seating?: NullableIntFieldUpdateOperationsInput | undefined;
    bedrooms?: NullableIntFieldUpdateOperationsInput | undefined;
    bathrooms?: NullableIntFieldUpdateOperationsInput | undefined;
    description?: NullableStringFieldUpdateOperationsInput | undefined;
    views?: IntFieldUpdateOperationsInput | undefined;
    likes?: SaveUpdateManyWithoutPropertyInput | undefined;
    source?: StringFieldUpdateOperationsInput | undefined;
    region?: StringFieldUpdateOperationsInput | undefined;
    city?: StringFieldUpdateOperationsInput | undefined;
    town?: StringFieldUpdateOperationsInput | undefined;
    streetName?: NullableStringFieldUpdateOperationsInput | undefined;
    digitalAddress?: NullableStringFieldUpdateOperationsInput | undefined;
    locationDesc?: NullableStringFieldUpdateOperationsInput | undefined;
    lat?: NullableFloatFieldUpdateOperationsInput | undefined;
    lon?: NullableFloatFieldUpdateOperationsInput | undefined;
    isDeleted?: BoolFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    owner?: UserUpdateOneWithoutPropertyInput | undefined;
    organization?: OrganizationUpdateOneWithoutPropertiesInput | undefined;
    advertisement?: AdvertisementUpdateManyWithoutPropertyInput | undefined;
}
