import { LocationOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/LocationOrderByWithRelationAndSearchRelevanceInput";
import { LocationWhereInput } from "../../../inputs/LocationWhereInput";
import { LocationWhereUniqueInput } from "../../../inputs/LocationWhereUniqueInput";
export declare class FindFirstLocationArgs {
    where?: LocationWhereInput | undefined;
    orderBy?: LocationOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: LocationWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "region" | "city" | "locationInfo" | "electricitySupplyRating" | "waterSupplyRating" | "noiseLevelSupplyRating" | "crimeSupplpyRating" | "recreationalRating" | "trafficRating" | "lat" | "lon"> | undefined;
}
