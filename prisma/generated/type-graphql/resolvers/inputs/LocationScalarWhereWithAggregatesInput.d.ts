import { FloatNullableWithAggregatesFilter } from "../inputs/FloatNullableWithAggregatesFilter";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class LocationScalarWhereWithAggregatesInput {
    AND?: LocationScalarWhereWithAggregatesInput[] | undefined;
    OR?: LocationScalarWhereWithAggregatesInput[] | undefined;
    NOT?: LocationScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    region?: StringWithAggregatesFilter | undefined;
    city?: StringWithAggregatesFilter | undefined;
    locationInfo?: StringNullableWithAggregatesFilter | undefined;
    electricitySupplyRating?: IntNullableWithAggregatesFilter | undefined;
    waterSupplyRating?: IntNullableWithAggregatesFilter | undefined;
    noiseLevelSupplyRating?: IntNullableWithAggregatesFilter | undefined;
    crimeSupplpyRating?: IntNullableWithAggregatesFilter | undefined;
    recreationalRating?: IntNullableWithAggregatesFilter | undefined;
    trafficRating?: IntNullableWithAggregatesFilter | undefined;
    lat?: FloatNullableWithAggregatesFilter | undefined;
    lon?: FloatNullableWithAggregatesFilter | undefined;
}
