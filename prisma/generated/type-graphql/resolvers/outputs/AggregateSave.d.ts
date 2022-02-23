import { SaveCountAggregate } from "../outputs/SaveCountAggregate";
import { SaveMaxAggregate } from "../outputs/SaveMaxAggregate";
import { SaveMinAggregate } from "../outputs/SaveMinAggregate";
export declare class AggregateSave {
    _count: SaveCountAggregate | null;
    _min: SaveMinAggregate | null;
    _max: SaveMaxAggregate | null;
}
