import { OrganizationCreateOrConnectWithoutAddressInput } from "../inputs/OrganizationCreateOrConnectWithoutAddressInput";
import { OrganizationCreateWithoutAddressInput } from "../inputs/OrganizationCreateWithoutAddressInput";
import { OrganizationWhereUniqueInput } from "../inputs/OrganizationWhereUniqueInput";
export declare class OrganizationCreateNestedOneWithoutAddressInput {
    create?: OrganizationCreateWithoutAddressInput | undefined;
    connectOrCreate?: OrganizationCreateOrConnectWithoutAddressInput | undefined;
    connect?: OrganizationWhereUniqueInput | undefined;
}
