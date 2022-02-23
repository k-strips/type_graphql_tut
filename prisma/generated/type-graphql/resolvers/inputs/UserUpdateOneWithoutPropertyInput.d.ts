import { UserCreateOrConnectWithoutPropertyInput } from "../inputs/UserCreateOrConnectWithoutPropertyInput";
import { UserCreateWithoutPropertyInput } from "../inputs/UserCreateWithoutPropertyInput";
import { UserUpdateWithoutPropertyInput } from "../inputs/UserUpdateWithoutPropertyInput";
import { UserUpsertWithoutPropertyInput } from "../inputs/UserUpsertWithoutPropertyInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateOneWithoutPropertyInput {
    create?: UserCreateWithoutPropertyInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutPropertyInput | undefined;
    upsert?: UserUpsertWithoutPropertyInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    connect?: UserWhereUniqueInput | undefined;
    update?: UserUpdateWithoutPropertyInput | undefined;
}
