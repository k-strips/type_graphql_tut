import { LocationOrderByWithAggregationInput } from "../../../inputs/LocationOrderByWithAggregationInput";
import { LocationScalarWhereWithAggregatesInput } from "../../../inputs/LocationScalarWhereWithAggregatesInput";
import { LocationWhereInput } from "../../../inputs/LocationWhereInput";
export declare class GroupByLocationArgs {
    where?: LocationWhereInput | undefined;
    orderBy?: LocationOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "region" | "city" | "locationInfo" | "electricitySupplyRating" | "waterSupplyRating" | "noiseLevelSupplyRating" | "crimeSupplpyRating" | "recreationalRating" | "trafficRating" | "lat" | "lon">;
    having?: LocationScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
