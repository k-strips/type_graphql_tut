import { AdvertisementCreateNestedManyWithoutOrganizationInput } from "../inputs/AdvertisementCreateNestedManyWithoutOrganizationInput";
import { PropertyCreateNestedManyWithoutOrganizationInput } from "../inputs/PropertyCreateNestedManyWithoutOrganizationInput";
import { UserCreateNestedManyWithoutOrganizationInput } from "../inputs/UserCreateNestedManyWithoutOrganizationInput";
export declare class OrganizationCreateWithoutAddressInput {
    id?: string | undefined;
    title: string;
    members?: UserCreateNestedManyWithoutOrganizationInput | undefined;
    properties?: PropertyCreateNestedManyWithoutOrganizationInput | undefined;
    advertisement?: AdvertisementCreateNestedManyWithoutOrganizationInput | undefined;
    isVerified?: boolean | undefined;
    isRegistrated?: boolean | undefined;
    isDeleted?: boolean | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
