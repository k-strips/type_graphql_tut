import { OrganizationCreateNestedOneWithoutAddressInput } from "../inputs/OrganizationCreateNestedOneWithoutAddressInput";
export declare class AddressCreateWithoutUserInput {
    id?: string | undefined;
    email: string;
    mobile?: string | undefined;
    work?: string | undefined;
    office?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    Organization?: OrganizationCreateNestedOneWithoutAddressInput | undefined;
}
