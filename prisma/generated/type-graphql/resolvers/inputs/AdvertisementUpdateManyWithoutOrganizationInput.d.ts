import { AdvertisementCreateManyOrganizationInputEnvelope } from "../inputs/AdvertisementCreateManyOrganizationInputEnvelope";
import { AdvertisementCreateOrConnectWithoutOrganizationInput } from "../inputs/AdvertisementCreateOrConnectWithoutOrganizationInput";
import { AdvertisementCreateWithoutOrganizationInput } from "../inputs/AdvertisementCreateWithoutOrganizationInput";
import { AdvertisementScalarWhereInput } from "../inputs/AdvertisementScalarWhereInput";
import { AdvertisementUpdateManyWithWhereWithoutOrganizationInput } from "../inputs/AdvertisementUpdateManyWithWhereWithoutOrganizationInput";
import { AdvertisementUpdateWithWhereUniqueWithoutOrganizationInput } from "../inputs/AdvertisementUpdateWithWhereUniqueWithoutOrganizationInput";
import { AdvertisementUpsertWithWhereUniqueWithoutOrganizationInput } from "../inputs/AdvertisementUpsertWithWhereUniqueWithoutOrganizationInput";
import { AdvertisementWhereUniqueInput } from "../inputs/AdvertisementWhereUniqueInput";
export declare class AdvertisementUpdateManyWithoutOrganizationInput {
    create?: AdvertisementCreateWithoutOrganizationInput[] | undefined;
    connectOrCreate?: AdvertisementCreateOrConnectWithoutOrganizationInput[] | undefined;
    upsert?: AdvertisementUpsertWithWhereUniqueWithoutOrganizationInput[] | undefined;
    createMany?: AdvertisementCreateManyOrganizationInputEnvelope | undefined;
    set?: AdvertisementWhereUniqueInput[] | undefined;
    disconnect?: AdvertisementWhereUniqueInput[] | undefined;
    delete?: AdvertisementWhereUniqueInput[] | undefined;
    connect?: AdvertisementWhereUniqueInput[] | undefined;
    update?: AdvertisementUpdateWithWhereUniqueWithoutOrganizationInput[] | undefined;
    updateMany?: AdvertisementUpdateManyWithWhereWithoutOrganizationInput[] | undefined;
    deleteMany?: AdvertisementScalarWhereInput[] | undefined;
}
