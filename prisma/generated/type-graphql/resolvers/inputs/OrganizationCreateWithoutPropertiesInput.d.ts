import { AddressCreateNestedOneWithoutOrganizationInput } from "../inputs/AddressCreateNestedOneWithoutOrganizationInput";
import { AdvertisementCreateNestedManyWithoutOrganizationInput } from "../inputs/AdvertisementCreateNestedManyWithoutOrganizationInput";
import { UserCreateNestedManyWithoutOrganizationInput } from "../inputs/UserCreateNestedManyWithoutOrganizationInput";
export declare class OrganizationCreateWithoutPropertiesInput {
    id?: string | undefined;
    title: string;
    address?: AddressCreateNestedOneWithoutOrganizationInput | undefined;
    members?: UserCreateNestedManyWithoutOrganizationInput | undefined;
    advertisement?: AdvertisementCreateNestedManyWithoutOrganizationInput | undefined;
    isVerified?: boolean | undefined;
    isRegistrated?: boolean | undefined;
    isDeleted?: boolean | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
