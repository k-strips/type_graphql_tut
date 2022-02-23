import { UserCreateOrConnectWithoutSavesInput } from "../inputs/UserCreateOrConnectWithoutSavesInput";
import { UserCreateWithoutSavesInput } from "../inputs/UserCreateWithoutSavesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserCreateNestedOneWithoutSavesInput {
    create?: UserCreateWithoutSavesInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutSavesInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
}
