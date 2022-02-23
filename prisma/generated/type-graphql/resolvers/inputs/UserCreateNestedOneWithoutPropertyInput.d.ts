import { UserCreateOrConnectWithoutPropertyInput } from "../inputs/UserCreateOrConnectWithoutPropertyInput";
import { UserCreateWithoutPropertyInput } from "../inputs/UserCreateWithoutPropertyInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserCreateNestedOneWithoutPropertyInput {
    create?: UserCreateWithoutPropertyInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutPropertyInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
}
