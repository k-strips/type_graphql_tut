import { AdvertisementCountAggregate } from "../outputs/AdvertisementCountAggregate";
import { AdvertisementMaxAggregate } from "../outputs/AdvertisementMaxAggregate";
import { AdvertisementMinAggregate } from "../outputs/AdvertisementMinAggregate";
export declare class AggregateAdvertisement {
    _count: AdvertisementCountAggregate | null;
    _min: AdvertisementMinAggregate | null;
    _max: AdvertisementMaxAggregate | null;
}
