import { SearchAvgAggregate } from "../outputs/SearchAvgAggregate";
import { SearchCountAggregate } from "../outputs/SearchCountAggregate";
import { SearchMaxAggregate } from "../outputs/SearchMaxAggregate";
import { SearchMinAggregate } from "../outputs/SearchMinAggregate";
import { SearchSumAggregate } from "../outputs/SearchSumAggregate";
export declare class AggregateSearch {
    _count: SearchCountAggregate | null;
    _avg: SearchAvgAggregate | null;
    _sum: SearchSumAggregate | null;
    _min: SearchMinAggregate | null;
    _max: SearchMaxAggregate | null;
}
