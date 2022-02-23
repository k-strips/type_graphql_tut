import { NullableFloatFieldUpdateOperationsInput } from "../inputs/NullableFloatFieldUpdateOperationsInput";
import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class LocationUpdateManyMutationInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    region?: StringFieldUpdateOperationsInput | undefined;
    city?: StringFieldUpdateOperationsInput | undefined;
    locationInfo?: NullableStringFieldUpdateOperationsInput | undefined;
    electricitySupplyRating?: NullableIntFieldUpdateOperationsInput | undefined;
    waterSupplyRating?: NullableIntFieldUpdateOperationsInput | undefined;
    noiseLevelSupplyRating?: NullableIntFieldUpdateOperationsInput | undefined;
    crimeSupplpyRating?: NullableIntFieldUpdateOperationsInput | undefined;
    recreationalRating?: NullableIntFieldUpdateOperationsInput | undefined;
    trafficRating?: NullableIntFieldUpdateOperationsInput | undefined;
    lat?: NullableFloatFieldUpdateOperationsInput | undefined;
    lon?: NullableFloatFieldUpdateOperationsInput | undefined;
}
