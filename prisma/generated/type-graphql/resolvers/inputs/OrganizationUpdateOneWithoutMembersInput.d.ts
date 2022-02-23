import { OrganizationCreateOrConnectWithoutMembersInput } from "../inputs/OrganizationCreateOrConnectWithoutMembersInput";
import { OrganizationCreateWithoutMembersInput } from "../inputs/OrganizationCreateWithoutMembersInput";
import { OrganizationUpdateWithoutMembersInput } from "../inputs/OrganizationUpdateWithoutMembersInput";
import { OrganizationUpsertWithoutMembersInput } from "../inputs/OrganizationUpsertWithoutMembersInput";
import { OrganizationWhereUniqueInput } from "../inputs/OrganizationWhereUniqueInput";
export declare class OrganizationUpdateOneWithoutMembersInput {
    create?: OrganizationCreateWithoutMembersInput | undefined;
    connectOrCreate?: OrganizationCreateOrConnectWithoutMembersInput | undefined;
    upsert?: OrganizationUpsertWithoutMembersInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    connect?: OrganizationWhereUniqueInput | undefined;
    update?: OrganizationUpdateWithoutMembersInput | undefined;
}
