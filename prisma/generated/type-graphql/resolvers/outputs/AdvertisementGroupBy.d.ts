import { AdvertisementCountAggregate } from "../outputs/AdvertisementCountAggregate";
import { AdvertisementMaxAggregate } from "../outputs/AdvertisementMaxAggregate";
import { AdvertisementMinAggregate } from "../outputs/AdvertisementMinAggregate";
export declare class AdvertisementGroupBy {
    id: string;
    isExpired: boolean;
    isPaused: boolean;
    createdAt: Date;
    updatedAt: Date;
    userId: string | null;
    organizationId: string | null;
    propertyId: string | null;
    _count: AdvertisementCountAggregate | null;
    _min: AdvertisementMinAggregate | null;
    _max: AdvertisementMaxAggregate | null;
}
