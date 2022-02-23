import { AddressCreateNestedOneWithoutOrganizationInput } from "../inputs/AddressCreateNestedOneWithoutOrganizationInput";
import { PropertyCreateNestedManyWithoutOrganizationInput } from "../inputs/PropertyCreateNestedManyWithoutOrganizationInput";
import { UserCreateNestedManyWithoutOrganizationInput } from "../inputs/UserCreateNestedManyWithoutOrganizationInput";
export declare class OrganizationCreateWithoutAdvertisementInput {
    id?: string | undefined;
    title: string;
    address?: AddressCreateNestedOneWithoutOrganizationInput | undefined;
    members?: UserCreateNestedManyWithoutOrganizationInput | undefined;
    properties?: PropertyCreateNestedManyWithoutOrganizationInput | undefined;
    isVerified?: boolean | undefined;
    isRegistrated?: boolean | undefined;
    isDeleted?: boolean | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
