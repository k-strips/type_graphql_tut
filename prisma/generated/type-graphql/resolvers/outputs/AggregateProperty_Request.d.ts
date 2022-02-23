import { Property_RequestAvgAggregate } from "../outputs/Property_RequestAvgAggregate";
import { Property_RequestCountAggregate } from "../outputs/Property_RequestCountAggregate";
import { Property_RequestMaxAggregate } from "../outputs/Property_RequestMaxAggregate";
import { Property_RequestMinAggregate } from "../outputs/Property_RequestMinAggregate";
import { Property_RequestSumAggregate } from "../outputs/Property_RequestSumAggregate";
export declare class AggregateProperty_Request {
    _count: Property_RequestCountAggregate | null;
    _avg: Property_RequestAvgAggregate | null;
    _sum: Property_RequestSumAggregate | null;
    _min: Property_RequestMinAggregate | null;
    _max: Property_RequestMaxAggregate | null;
}
