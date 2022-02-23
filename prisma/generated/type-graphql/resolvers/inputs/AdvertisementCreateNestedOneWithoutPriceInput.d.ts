import { AdvertisementCreateOrConnectWithoutPriceInput } from "../inputs/AdvertisementCreateOrConnectWithoutPriceInput";
import { AdvertisementCreateWithoutPriceInput } from "../inputs/AdvertisementCreateWithoutPriceInput";
import { AdvertisementWhereUniqueInput } from "../inputs/AdvertisementWhereUniqueInput";
export declare class AdvertisementCreateNestedOneWithoutPriceInput {
    create?: AdvertisementCreateWithoutPriceInput | undefined;
    connectOrCreate?: AdvertisementCreateOrConnectWithoutPriceInput | undefined;
    connect?: AdvertisementWhereUniqueInput | undefined;
}
