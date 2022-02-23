import { OrganizationCreateOrConnectWithoutMembersInput } from "../inputs/OrganizationCreateOrConnectWithoutMembersInput";
import { OrganizationCreateWithoutMembersInput } from "../inputs/OrganizationCreateWithoutMembersInput";
import { OrganizationWhereUniqueInput } from "../inputs/OrganizationWhereUniqueInput";
export declare class OrganizationCreateNestedOneWithoutMembersInput {
    create?: OrganizationCreateWithoutMembersInput | undefined;
    connectOrCreate?: OrganizationCreateOrConnectWithoutMembersInput | undefined;
    connect?: OrganizationWhereUniqueInput | undefined;
}
