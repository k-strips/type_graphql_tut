import { FloatNullableFilter } from "../inputs/FloatNullableFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class LocationWhereInput {
    AND?: LocationWhereInput[] | undefined;
    OR?: LocationWhereInput[] | undefined;
    NOT?: LocationWhereInput[] | undefined;
    id?: StringFilter | undefined;
    region?: StringFilter | undefined;
    city?: StringFilter | undefined;
    locationInfo?: StringNullableFilter | undefined;
    electricitySupplyRating?: IntNullableFilter | undefined;
    waterSupplyRating?: IntNullableFilter | undefined;
    noiseLevelSupplyRating?: IntNullableFilter | undefined;
    crimeSupplpyRating?: IntNullableFilter | undefined;
    recreationalRating?: IntNullableFilter | undefined;
    trafficRating?: IntNullableFilter | undefined;
    lat?: FloatNullableFilter | undefined;
    lon?: FloatNullableFilter | undefined;
}
