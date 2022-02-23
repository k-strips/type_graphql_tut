import { UserCreateManyOrganizationInputEnvelope } from "../inputs/UserCreateManyOrganizationInputEnvelope";
import { UserCreateOrConnectWithoutOrganizationInput } from "../inputs/UserCreateOrConnectWithoutOrganizationInput";
import { UserCreateWithoutOrganizationInput } from "../inputs/UserCreateWithoutOrganizationInput";
import { UserScalarWhereInput } from "../inputs/UserScalarWhereInput";
import { UserUpdateManyWithWhereWithoutOrganizationInput } from "../inputs/UserUpdateManyWithWhereWithoutOrganizationInput";
import { UserUpdateWithWhereUniqueWithoutOrganizationInput } from "../inputs/UserUpdateWithWhereUniqueWithoutOrganizationInput";
import { UserUpsertWithWhereUniqueWithoutOrganizationInput } from "../inputs/UserUpsertWithWhereUniqueWithoutOrganizationInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateManyWithoutOrganizationInput {
    create?: UserCreateWithoutOrganizationInput[] | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutOrganizationInput[] | undefined;
    upsert?: UserUpsertWithWhereUniqueWithoutOrganizationInput[] | undefined;
    createMany?: UserCreateManyOrganizationInputEnvelope | undefined;
    set?: UserWhereUniqueInput[] | undefined;
    disconnect?: UserWhereUniqueInput[] | undefined;
    delete?: UserWhereUniqueInput[] | undefined;
    connect?: UserWhereUniqueInput[] | undefined;
    update?: UserUpdateWithWhereUniqueWithoutOrganizationInput[] | undefined;
    updateMany?: UserUpdateManyWithWhereWithoutOrganizationInput[] | undefined;
    deleteMany?: UserScalarWhereInput[] | undefined;
}
