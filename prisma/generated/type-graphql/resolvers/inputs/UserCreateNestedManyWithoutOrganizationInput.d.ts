import { UserCreateManyOrganizationInputEnvelope } from "../inputs/UserCreateManyOrganizationInputEnvelope";
import { UserCreateOrConnectWithoutOrganizationInput } from "../inputs/UserCreateOrConnectWithoutOrganizationInput";
import { UserCreateWithoutOrganizationInput } from "../inputs/UserCreateWithoutOrganizationInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserCreateNestedManyWithoutOrganizationInput {
    create?: UserCreateWithoutOrganizationInput[] | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutOrganizationInput[] | undefined;
    createMany?: UserCreateManyOrganizationInputEnvelope | undefined;
    connect?: UserWhereUniqueInput[] | undefined;
}
