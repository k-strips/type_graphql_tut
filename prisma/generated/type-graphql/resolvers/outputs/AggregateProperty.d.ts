import { PropertyAvgAggregate } from "../outputs/PropertyAvgAggregate";
import { PropertyCountAggregate } from "../outputs/PropertyCountAggregate";
import { PropertyMaxAggregate } from "../outputs/PropertyMaxAggregate";
import { PropertyMinAggregate } from "../outputs/PropertyMinAggregate";
import { PropertySumAggregate } from "../outputs/PropertySumAggregate";
export declare class AggregateProperty {
    _count: PropertyCountAggregate | null;
    _avg: PropertyAvgAggregate | null;
    _sum: PropertySumAggregate | null;
    _min: PropertyMinAggregate | null;
    _max: PropertyMaxAggregate | null;
}
