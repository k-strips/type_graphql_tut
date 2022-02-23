import { LocationAvgAggregate } from "../outputs/LocationAvgAggregate";
import { LocationCountAggregate } from "../outputs/LocationCountAggregate";
import { LocationMaxAggregate } from "../outputs/LocationMaxAggregate";
import { LocationMinAggregate } from "../outputs/LocationMinAggregate";
import { LocationSumAggregate } from "../outputs/LocationSumAggregate";
export declare class LocationGroupBy {
    id: string;
    region: string;
    city: string;
    locationInfo: string | null;
    electricitySupplyRating: number | null;
    waterSupplyRating: number | null;
    noiseLevelSupplyRating: number | null;
    crimeSupplpyRating: number | null;
    recreationalRating: number | null;
    trafficRating: number | null;
    lat: number | null;
    lon: number | null;
    _count: LocationCountAggregate | null;
    _avg: LocationAvgAggregate | null;
    _sum: LocationSumAggregate | null;
    _min: LocationMinAggregate | null;
    _max: LocationMaxAggregate | null;
}
