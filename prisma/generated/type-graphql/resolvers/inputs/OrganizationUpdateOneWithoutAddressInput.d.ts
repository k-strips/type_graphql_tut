import { OrganizationCreateOrConnectWithoutAddressInput } from "../inputs/OrganizationCreateOrConnectWithoutAddressInput";
import { OrganizationCreateWithoutAddressInput } from "../inputs/OrganizationCreateWithoutAddressInput";
import { OrganizationUpdateWithoutAddressInput } from "../inputs/OrganizationUpdateWithoutAddressInput";
import { OrganizationUpsertWithoutAddressInput } from "../inputs/OrganizationUpsertWithoutAddressInput";
import { OrganizationWhereUniqueInput } from "../inputs/OrganizationWhereUniqueInput";
export declare class OrganizationUpdateOneWithoutAddressInput {
    create?: OrganizationCreateWithoutAddressInput | undefined;
    connectOrCreate?: OrganizationCreateOrConnectWithoutAddressInput | undefined;
    upsert?: OrganizationUpsertWithoutAddressInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    connect?: OrganizationWhereUniqueInput | undefined;
    update?: OrganizationUpdateWithoutAddressInput | undefined;
}
