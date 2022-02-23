import { UserCreateOrConnectWithoutAddressInput } from "../inputs/UserCreateOrConnectWithoutAddressInput";
import { UserCreateWithoutAddressInput } from "../inputs/UserCreateWithoutAddressInput";
import { UserUpdateWithoutAddressInput } from "../inputs/UserUpdateWithoutAddressInput";
import { UserUpsertWithoutAddressInput } from "../inputs/UserUpsertWithoutAddressInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateOneWithoutAddressInput {
    create?: UserCreateWithoutAddressInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutAddressInput | undefined;
    upsert?: UserUpsertWithoutAddressInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    connect?: UserWhereUniqueInput | undefined;
    update?: UserUpdateWithoutAddressInput | undefined;
}
