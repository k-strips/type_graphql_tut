import { AdvertisementCreateManyUserInputEnvelope } from "../inputs/AdvertisementCreateManyUserInputEnvelope";
import { AdvertisementCreateOrConnectWithoutUserInput } from "../inputs/AdvertisementCreateOrConnectWithoutUserInput";
import { AdvertisementCreateWithoutUserInput } from "../inputs/AdvertisementCreateWithoutUserInput";
import { AdvertisementWhereUniqueInput } from "../inputs/AdvertisementWhereUniqueInput";
export declare class AdvertisementCreateNestedManyWithoutUserInput {
    create?: AdvertisementCreateWithoutUserInput[] | undefined;
    connectOrCreate?: AdvertisementCreateOrConnectWithoutUserInput[] | undefined;
    createMany?: AdvertisementCreateManyUserInputEnvelope | undefined;
    connect?: AdvertisementWhereUniqueInput[] | undefined;
}
