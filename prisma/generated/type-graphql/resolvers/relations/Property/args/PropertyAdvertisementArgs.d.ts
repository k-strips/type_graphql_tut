import { AdvertisementOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/AdvertisementOrderByWithRelationAndSearchRelevanceInput";
import { AdvertisementWhereInput } from "../../../inputs/AdvertisementWhereInput";
import { AdvertisementWhereUniqueInput } from "../../../inputs/AdvertisementWhereUniqueInput";
export declare class PropertyAdvertisementArgs {
    where?: AdvertisementWhereInput | undefined;
    orderBy?: AdvertisementOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: AdvertisementWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "isExpired" | "isPaused" | "createdAt" | "updatedAt" | "userId" | "organizationId" | "propertyId"> | undefined;
}
