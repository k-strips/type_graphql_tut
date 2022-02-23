import { OrganizationCreateNestedOneWithoutAddressInput } from "../inputs/OrganizationCreateNestedOneWithoutAddressInput";
import { UserCreateNestedOneWithoutAddressInput } from "../inputs/UserCreateNestedOneWithoutAddressInput";
export declare class AddressCreateInput {
    id?: string | undefined;
    email: string;
    mobile?: string | undefined;
    work?: string | undefined;
    office?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    Organization?: OrganizationCreateNestedOneWithoutAddressInput | undefined;
    User?: UserCreateNestedOneWithoutAddressInput | undefined;
}
