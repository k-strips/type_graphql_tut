import { OrganizationCreateOrConnectWithoutAdvertisementInput } from "../inputs/OrganizationCreateOrConnectWithoutAdvertisementInput";
import { OrganizationCreateWithoutAdvertisementInput } from "../inputs/OrganizationCreateWithoutAdvertisementInput";
import { OrganizationUpdateWithoutAdvertisementInput } from "../inputs/OrganizationUpdateWithoutAdvertisementInput";
import { OrganizationUpsertWithoutAdvertisementInput } from "../inputs/OrganizationUpsertWithoutAdvertisementInput";
import { OrganizationWhereUniqueInput } from "../inputs/OrganizationWhereUniqueInput";
export declare class OrganizationUpdateOneWithoutAdvertisementInput {
    create?: OrganizationCreateWithoutAdvertisementInput | undefined;
    connectOrCreate?: OrganizationCreateOrConnectWithoutAdvertisementInput | undefined;
    upsert?: OrganizationUpsertWithoutAdvertisementInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    connect?: OrganizationWhereUniqueInput | undefined;
    update?: OrganizationUpdateWithoutAdvertisementInput | undefined;
}
