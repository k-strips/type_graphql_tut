import { AddressCreateNestedOneWithoutOrganizationInput } from "../inputs/AddressCreateNestedOneWithoutOrganizationInput";
import { AdvertisementCreateNestedManyWithoutOrganizationInput } from "../inputs/AdvertisementCreateNestedManyWithoutOrganizationInput";
import { PropertyCreateNestedManyWithoutOrganizationInput } from "../inputs/PropertyCreateNestedManyWithoutOrganizationInput";
export declare class OrganizationCreateWithoutMembersInput {
    id?: string | undefined;
    title: string;
    address?: AddressCreateNestedOneWithoutOrganizationInput | undefined;
    properties?: PropertyCreateNestedManyWithoutOrganizationInput | undefined;
    advertisement?: AdvertisementCreateNestedManyWithoutOrganizationInput | undefined;
    isVerified?: boolean | undefined;
    isRegistrated?: boolean | undefined;
    isDeleted?: boolean | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
