import { AdvertisementCreateOrConnectWithoutPriceInput } from "../inputs/AdvertisementCreateOrConnectWithoutPriceInput";
import { AdvertisementCreateWithoutPriceInput } from "../inputs/AdvertisementCreateWithoutPriceInput";
import { AdvertisementUpdateWithoutPriceInput } from "../inputs/AdvertisementUpdateWithoutPriceInput";
import { AdvertisementUpsertWithoutPriceInput } from "../inputs/AdvertisementUpsertWithoutPriceInput";
import { AdvertisementWhereUniqueInput } from "../inputs/AdvertisementWhereUniqueInput";
export declare class AdvertisementUpdateOneWithoutPriceInput {
    create?: AdvertisementCreateWithoutPriceInput | undefined;
    connectOrCreate?: AdvertisementCreateOrConnectWithoutPriceInput | undefined;
    upsert?: AdvertisementUpsertWithoutPriceInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    connect?: AdvertisementWhereUniqueInput | undefined;
    update?: AdvertisementUpdateWithoutPriceInput | undefined;
}
