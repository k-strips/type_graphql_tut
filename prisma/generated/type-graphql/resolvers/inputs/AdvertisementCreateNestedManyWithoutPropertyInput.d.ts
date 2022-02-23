import { AdvertisementCreateManyPropertyInputEnvelope } from "../inputs/AdvertisementCreateManyPropertyInputEnvelope";
import { AdvertisementCreateOrConnectWithoutPropertyInput } from "../inputs/AdvertisementCreateOrConnectWithoutPropertyInput";
import { AdvertisementCreateWithoutPropertyInput } from "../inputs/AdvertisementCreateWithoutPropertyInput";
import { AdvertisementWhereUniqueInput } from "../inputs/AdvertisementWhereUniqueInput";
export declare class AdvertisementCreateNestedManyWithoutPropertyInput {
    create?: AdvertisementCreateWithoutPropertyInput[] | undefined;
    connectOrCreate?: AdvertisementCreateOrConnectWithoutPropertyInput[] | undefined;
    createMany?: AdvertisementCreateManyPropertyInputEnvelope | undefined;
    connect?: AdvertisementWhereUniqueInput[] | undefined;
}
