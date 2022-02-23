import { AddressCreateNestedOneWithoutUserInput } from "../inputs/AddressCreateNestedOneWithoutUserInput";
import { AdvertisementCreateNestedManyWithoutUserInput } from "../inputs/AdvertisementCreateNestedManyWithoutUserInput";
import { OrganizationCreateNestedOneWithoutMembersInput } from "../inputs/OrganizationCreateNestedOneWithoutMembersInput";
import { PropertyCreateNestedManyWithoutOwnerInput } from "../inputs/PropertyCreateNestedManyWithoutOwnerInput";
import { SaveCreateNestedManyWithoutUserInput } from "../inputs/SaveCreateNestedManyWithoutUserInput";
export declare class UserCreateWithoutRequestInput {
    id?: string | undefined;
    firstName: string;
    lastName: string;
    middleName?: string | undefined;
    status?: "SEEKER" | "PROPERTYOWNER" | "INVESTORS" | undefined;
    address?: AddressCreateNestedOneWithoutUserInput | undefined;
    property?: PropertyCreateNestedManyWithoutOwnerInput | undefined;
    saves?: SaveCreateNestedManyWithoutUserInput | undefined;
    advertisement?: AdvertisementCreateNestedManyWithoutUserInput | undefined;
    isVerified?: boolean | undefined;
    isRegistrated?: boolean | undefined;
    isDeleted?: boolean | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    organization?: OrganizationCreateNestedOneWithoutMembersInput | undefined;
}
