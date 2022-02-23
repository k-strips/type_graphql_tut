import { UserCreateOrConnectWithoutAdvertisementInput } from "../inputs/UserCreateOrConnectWithoutAdvertisementInput";
import { UserCreateWithoutAdvertisementInput } from "../inputs/UserCreateWithoutAdvertisementInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserCreateNestedOneWithoutAdvertisementInput {
    create?: UserCreateWithoutAdvertisementInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutAdvertisementInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
}
