import { UserCreateOrConnectWithoutRequestInput } from "../inputs/UserCreateOrConnectWithoutRequestInput";
import { UserCreateWithoutRequestInput } from "../inputs/UserCreateWithoutRequestInput";
import { UserUpdateWithoutRequestInput } from "../inputs/UserUpdateWithoutRequestInput";
import { UserUpsertWithoutRequestInput } from "../inputs/UserUpsertWithoutRequestInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateOneWithoutRequestInput {
    create?: UserCreateWithoutRequestInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutRequestInput | undefined;
    upsert?: UserUpsertWithoutRequestInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    connect?: UserWhereUniqueInput | undefined;
    update?: UserUpdateWithoutRequestInput | undefined;
}
