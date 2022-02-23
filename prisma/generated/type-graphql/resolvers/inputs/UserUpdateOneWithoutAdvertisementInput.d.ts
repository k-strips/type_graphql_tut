import { UserCreateOrConnectWithoutAdvertisementInput } from "../inputs/UserCreateOrConnectWithoutAdvertisementInput";
import { UserCreateWithoutAdvertisementInput } from "../inputs/UserCreateWithoutAdvertisementInput";
import { UserUpdateWithoutAdvertisementInput } from "../inputs/UserUpdateWithoutAdvertisementInput";
import { UserUpsertWithoutAdvertisementInput } from "../inputs/UserUpsertWithoutAdvertisementInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateOneWithoutAdvertisementInput {
    create?: UserCreateWithoutAdvertisementInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutAdvertisementInput | undefined;
    upsert?: UserUpsertWithoutAdvertisementInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    connect?: UserWhereUniqueInput | undefined;
    update?: UserUpdateWithoutAdvertisementInput | undefined;
}
