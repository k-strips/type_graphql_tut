import { UserCreateOrConnectWithoutAddressInput } from "../inputs/UserCreateOrConnectWithoutAddressInput";
import { UserCreateWithoutAddressInput } from "../inputs/UserCreateWithoutAddressInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserCreateNestedOneWithoutAddressInput {
    create?: UserCreateWithoutAddressInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutAddressInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
}
