import { AdvertisementCreateInput } from "../../../inputs/AdvertisementCreateInput";
import { AdvertisementUpdateInput } from "../../../inputs/AdvertisementUpdateInput";
import { AdvertisementWhereUniqueInput } from "../../../inputs/AdvertisementWhereUniqueInput";
export declare class UpsertAdvertisementArgs {
    where: AdvertisementWhereUniqueInput;
    create: AdvertisementCreateInput;
    update: AdvertisementUpdateInput;
}
