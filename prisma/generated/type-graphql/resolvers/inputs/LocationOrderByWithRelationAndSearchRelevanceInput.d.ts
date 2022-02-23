import { LocationOrderByRelevanceInput } from "../inputs/LocationOrderByRelevanceInput";
export declare class LocationOrderByWithRelationAndSearchRelevanceInput {
    id?: "asc" | "desc" | undefined;
    region?: "asc" | "desc" | undefined;
    city?: "asc" | "desc" | undefined;
    locationInfo?: "asc" | "desc" | undefined;
    electricitySupplyRating?: "asc" | "desc" | undefined;
    waterSupplyRating?: "asc" | "desc" | undefined;
    noiseLevelSupplyRating?: "asc" | "desc" | undefined;
    crimeSupplpyRating?: "asc" | "desc" | undefined;
    recreationalRating?: "asc" | "desc" | undefined;
    trafficRating?: "asc" | "desc" | undefined;
    lat?: "asc" | "desc" | undefined;
    lon?: "asc" | "desc" | undefined;
    _relevance?: LocationOrderByRelevanceInput | undefined;
}
