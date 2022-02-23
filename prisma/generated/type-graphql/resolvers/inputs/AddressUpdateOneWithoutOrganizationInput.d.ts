import { AddressCreateOrConnectWithoutOrganizationInput } from "../inputs/AddressCreateOrConnectWithoutOrganizationInput";
import { AddressCreateWithoutOrganizationInput } from "../inputs/AddressCreateWithoutOrganizationInput";
import { AddressUpdateWithoutOrganizationInput } from "../inputs/AddressUpdateWithoutOrganizationInput";
import { AddressUpsertWithoutOrganizationInput } from "../inputs/AddressUpsertWithoutOrganizationInput";
import { AddressWhereUniqueInput } from "../inputs/AddressWhereUniqueInput";
export declare class AddressUpdateOneWithoutOrganizationInput {
    create?: AddressCreateWithoutOrganizationInput | undefined;
    connectOrCreate?: AddressCreateOrConnectWithoutOrganizationInput | undefined;
    upsert?: AddressUpsertWithoutOrganizationInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    connect?: AddressWhereUniqueInput | undefined;
    update?: AddressUpdateWithoutOrganizationInput | undefined;
}
