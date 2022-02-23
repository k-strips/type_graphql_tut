import { OrganizationCreateOrConnectWithoutAdvertisementInput } from "../inputs/OrganizationCreateOrConnectWithoutAdvertisementInput";
import { OrganizationCreateWithoutAdvertisementInput } from "../inputs/OrganizationCreateWithoutAdvertisementInput";
import { OrganizationWhereUniqueInput } from "../inputs/OrganizationWhereUniqueInput";
export declare class OrganizationCreateNestedOneWithoutAdvertisementInput {
    create?: OrganizationCreateWithoutAdvertisementInput | undefined;
    connectOrCreate?: OrganizationCreateOrConnectWithoutAdvertisementInput | undefined;
    connect?: OrganizationWhereUniqueInput | undefined;
}
