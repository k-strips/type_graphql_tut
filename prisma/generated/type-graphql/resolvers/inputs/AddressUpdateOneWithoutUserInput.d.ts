import { AddressCreateOrConnectWithoutUserInput } from "../inputs/AddressCreateOrConnectWithoutUserInput";
import { AddressCreateWithoutUserInput } from "../inputs/AddressCreateWithoutUserInput";
import { AddressUpdateWithoutUserInput } from "../inputs/AddressUpdateWithoutUserInput";
import { AddressUpsertWithoutUserInput } from "../inputs/AddressUpsertWithoutUserInput";
import { AddressWhereUniqueInput } from "../inputs/AddressWhereUniqueInput";
export declare class AddressUpdateOneWithoutUserInput {
    create?: AddressCreateWithoutUserInput | undefined;
    connectOrCreate?: AddressCreateOrConnectWithoutUserInput | undefined;
    upsert?: AddressUpsertWithoutUserInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    connect?: AddressWhereUniqueInput | undefined;
    update?: AddressUpdateWithoutUserInput | undefined;
}
