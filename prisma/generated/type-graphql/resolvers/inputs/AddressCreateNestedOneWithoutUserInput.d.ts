import { AddressCreateOrConnectWithoutUserInput } from "../inputs/AddressCreateOrConnectWithoutUserInput";
import { AddressCreateWithoutUserInput } from "../inputs/AddressCreateWithoutUserInput";
import { AddressWhereUniqueInput } from "../inputs/AddressWhereUniqueInput";
export declare class AddressCreateNestedOneWithoutUserInput {
    create?: AddressCreateWithoutUserInput | undefined;
    connectOrCreate?: AddressCreateOrConnectWithoutUserInput | undefined;
    connect?: AddressWhereUniqueInput | undefined;
}
