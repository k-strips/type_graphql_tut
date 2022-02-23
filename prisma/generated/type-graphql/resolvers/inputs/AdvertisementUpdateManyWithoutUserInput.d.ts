import { AdvertisementCreateManyUserInputEnvelope } from "../inputs/AdvertisementCreateManyUserInputEnvelope";
import { AdvertisementCreateOrConnectWithoutUserInput } from "../inputs/AdvertisementCreateOrConnectWithoutUserInput";
import { AdvertisementCreateWithoutUserInput } from "../inputs/AdvertisementCreateWithoutUserInput";
import { AdvertisementScalarWhereInput } from "../inputs/AdvertisementScalarWhereInput";
import { AdvertisementUpdateManyWithWhereWithoutUserInput } from "../inputs/AdvertisementUpdateManyWithWhereWithoutUserInput";
import { AdvertisementUpdateWithWhereUniqueWithoutUserInput } from "../inputs/AdvertisementUpdateWithWhereUniqueWithoutUserInput";
import { AdvertisementUpsertWithWhereUniqueWithoutUserInput } from "../inputs/AdvertisementUpsertWithWhereUniqueWithoutUserInput";
import { AdvertisementWhereUniqueInput } from "../inputs/AdvertisementWhereUniqueInput";
export declare class AdvertisementUpdateManyWithoutUserInput {
    create?: AdvertisementCreateWithoutUserInput[] | undefined;
    connectOrCreate?: AdvertisementCreateOrConnectWithoutUserInput[] | undefined;
    upsert?: AdvertisementUpsertWithWhereUniqueWithoutUserInput[] | undefined;
    createMany?: AdvertisementCreateManyUserInputEnvelope | undefined;
    set?: AdvertisementWhereUniqueInput[] | undefined;
    disconnect?: AdvertisementWhereUniqueInput[] | undefined;
    delete?: AdvertisementWhereUniqueInput[] | undefined;
    connect?: AdvertisementWhereUniqueInput[] | undefined;
    update?: AdvertisementUpdateWithWhereUniqueWithoutUserInput[] | undefined;
    updateMany?: AdvertisementUpdateManyWithWhereWithoutUserInput[] | undefined;
    deleteMany?: AdvertisementScalarWhereInput[] | undefined;
}
