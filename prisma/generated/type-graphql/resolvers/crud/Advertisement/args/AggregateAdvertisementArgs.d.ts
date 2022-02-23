import { AdvertisementOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/AdvertisementOrderByWithRelationAndSearchRelevanceInput";
import { AdvertisementWhereInput } from "../../../inputs/AdvertisementWhereInput";
import { AdvertisementWhereUniqueInput } from "../../../inputs/AdvertisementWhereUniqueInput";
export declare class AggregateAdvertisementArgs {
    where?: AdvertisementWhereInput | undefined;
    orderBy?: AdvertisementOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: AdvertisementWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
