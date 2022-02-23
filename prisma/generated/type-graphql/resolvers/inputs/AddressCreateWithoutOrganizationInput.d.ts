import { UserCreateNestedOneWithoutAddressInput } from "../inputs/UserCreateNestedOneWithoutAddressInput";
export declare class AddressCreateWithoutOrganizationInput {
    id?: string | undefined;
    email: string;
    mobile?: string | undefined;
    work?: string | undefined;
    office?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    User?: UserCreateNestedOneWithoutAddressInput | undefined;
}
