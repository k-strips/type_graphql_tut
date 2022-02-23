import { AdvertisementCreateManyPropertyInputEnvelope } from "../inputs/AdvertisementCreateManyPropertyInputEnvelope";
import { AdvertisementCreateOrConnectWithoutPropertyInput } from "../inputs/AdvertisementCreateOrConnectWithoutPropertyInput";
import { AdvertisementCreateWithoutPropertyInput } from "../inputs/AdvertisementCreateWithoutPropertyInput";
import { AdvertisementScalarWhereInput } from "../inputs/AdvertisementScalarWhereInput";
import { AdvertisementUpdateManyWithWhereWithoutPropertyInput } from "../inputs/AdvertisementUpdateManyWithWhereWithoutPropertyInput";
import { AdvertisementUpdateWithWhereUniqueWithoutPropertyInput } from "../inputs/AdvertisementUpdateWithWhereUniqueWithoutPropertyInput";
import { AdvertisementUpsertWithWhereUniqueWithoutPropertyInput } from "../inputs/AdvertisementUpsertWithWhereUniqueWithoutPropertyInput";
import { AdvertisementWhereUniqueInput } from "../inputs/AdvertisementWhereUniqueInput";
export declare class AdvertisementUpdateManyWithoutPropertyInput {
    create?: AdvertisementCreateWithoutPropertyInput[] | undefined;
    connectOrCreate?: AdvertisementCreateOrConnectWithoutPropertyInput[] | undefined;
    upsert?: AdvertisementUpsertWithWhereUniqueWithoutPropertyInput[] | undefined;
    createMany?: AdvertisementCreateManyPropertyInputEnvelope | undefined;
    set?: AdvertisementWhereUniqueInput[] | undefined;
    disconnect?: AdvertisementWhereUniqueInput[] | undefined;
    delete?: AdvertisementWhereUniqueInput[] | undefined;
    connect?: AdvertisementWhereUniqueInput[] | undefined;
    update?: AdvertisementUpdateWithWhereUniqueWithoutPropertyInput[] | undefined;
    updateMany?: AdvertisementUpdateManyWithWhereWithoutPropertyInput[] | undefined;
    deleteMany?: AdvertisementScalarWhereInput[] | undefined;
}
