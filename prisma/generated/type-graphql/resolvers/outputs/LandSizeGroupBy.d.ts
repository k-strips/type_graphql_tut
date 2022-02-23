import { LandSizeAvgAggregate } from "../outputs/LandSizeAvgAggregate";
import { LandSizeCountAggregate } from "../outputs/LandSizeCountAggregate";
import { LandSizeMaxAggregate } from "../outputs/LandSizeMaxAggregate";
import { LandSizeMinAggregate } from "../outputs/LandSizeMinAggregate";
import { LandSizeSumAggregate } from "../outputs/LandSizeSumAggregate";
export declare class LandSizeGroupBy {
    id: string;
    measurement: number;
    unit: "ACRE" | "PLOT" | "HECTARE" | "SQUAREMETER";
    propertyId: string | null;
    property_RequestId: string | null;
    _count: LandSizeCountAggregate | null;
    _avg: LandSizeAvgAggregate | null;
    _sum: LandSizeSumAggregate | null;
    _min: LandSizeMinAggregate | null;
    _max: LandSizeMaxAggregate | null;
}
