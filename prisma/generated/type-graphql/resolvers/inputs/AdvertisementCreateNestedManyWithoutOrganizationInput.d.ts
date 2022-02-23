import { AdvertisementCreateManyOrganizationInputEnvelope } from "../inputs/AdvertisementCreateManyOrganizationInputEnvelope";
import { AdvertisementCreateOrConnectWithoutOrganizationInput } from "../inputs/AdvertisementCreateOrConnectWithoutOrganizationInput";
import { AdvertisementCreateWithoutOrganizationInput } from "../inputs/AdvertisementCreateWithoutOrganizationInput";
import { AdvertisementWhereUniqueInput } from "../inputs/AdvertisementWhereUniqueInput";
export declare class AdvertisementCreateNestedManyWithoutOrganizationInput {
    create?: AdvertisementCreateWithoutOrganizationInput[] | undefined;
    connectOrCreate?: AdvertisementCreateOrConnectWithoutOrganizationInput[] | undefined;
    createMany?: AdvertisementCreateManyOrganizationInputEnvelope | undefined;
    connect?: AdvertisementWhereUniqueInput[] | undefined;
}
