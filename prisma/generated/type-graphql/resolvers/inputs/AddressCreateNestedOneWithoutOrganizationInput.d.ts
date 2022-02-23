import { AddressCreateOrConnectWithoutOrganizationInput } from "../inputs/AddressCreateOrConnectWithoutOrganizationInput";
import { AddressCreateWithoutOrganizationInput } from "../inputs/AddressCreateWithoutOrganizationInput";
import { AddressWhereUniqueInput } from "../inputs/AddressWhereUniqueInput";
export declare class AddressCreateNestedOneWithoutOrganizationInput {
    create?: AddressCreateWithoutOrganizationInput | undefined;
    connectOrCreate?: AddressCreateOrConnectWithoutOrganizationInput | undefined;
    connect?: AddressWhereUniqueInput | undefined;
}
