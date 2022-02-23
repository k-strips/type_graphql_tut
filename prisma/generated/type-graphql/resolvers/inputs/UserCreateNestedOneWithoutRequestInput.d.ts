import { UserCreateOrConnectWithoutRequestInput } from "../inputs/UserCreateOrConnectWithoutRequestInput";
import { UserCreateWithoutRequestInput } from "../inputs/UserCreateWithoutRequestInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserCreateNestedOneWithoutRequestInput {
    create?: UserCreateWithoutRequestInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutRequestInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
}
