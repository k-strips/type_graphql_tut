import { AdvertisementOrderByWithAggregationInput } from "../../../inputs/AdvertisementOrderByWithAggregationInput";
import { AdvertisementScalarWhereWithAggregatesInput } from "../../../inputs/AdvertisementScalarWhereWithAggregatesInput";
import { AdvertisementWhereInput } from "../../../inputs/AdvertisementWhereInput";
export declare class GroupByAdvertisementArgs {
    where?: AdvertisementWhereInput | undefined;
    orderBy?: AdvertisementOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "isExpired" | "isPaused" | "createdAt" | "updatedAt" | "userId" | "organizationId" | "propertyId">;
    having?: AdvertisementScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
