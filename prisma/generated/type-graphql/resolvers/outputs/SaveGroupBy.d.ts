import { SaveCountAggregate } from "../outputs/SaveCountAggregate";
import { SaveMaxAggregate } from "../outputs/SaveMaxAggregate";
import { SaveMinAggregate } from "../outputs/SaveMinAggregate";
export declare class SaveGroupBy {
    id: string;
    createdAt: Date;
    userId: string | null;
    propertyId: string | null;
    _count: SaveCountAggregate | null;
    _min: SaveMinAggregate | null;
    _max: SaveMaxAggregate | null;
}
