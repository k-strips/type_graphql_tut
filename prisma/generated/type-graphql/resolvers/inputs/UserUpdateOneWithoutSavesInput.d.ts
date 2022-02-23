import { UserCreateOrConnectWithoutSavesInput } from "../inputs/UserCreateOrConnectWithoutSavesInput";
import { UserCreateWithoutSavesInput } from "../inputs/UserCreateWithoutSavesInput";
import { UserUpdateWithoutSavesInput } from "../inputs/UserUpdateWithoutSavesInput";
import { UserUpsertWithoutSavesInput } from "../inputs/UserUpsertWithoutSavesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateOneWithoutSavesInput {
    create?: UserCreateWithoutSavesInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutSavesInput | undefined;
    upsert?: UserUpsertWithoutSavesInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    connect?: UserWhereUniqueInput | undefined;
    update?: UserUpdateWithoutSavesInput | undefined;
}
