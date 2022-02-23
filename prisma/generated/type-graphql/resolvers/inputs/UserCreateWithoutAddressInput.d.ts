import { AdvertisementCreateNestedManyWithoutUserInput } from "../inputs/AdvertisementCreateNestedManyWithoutUserInput";
import { OrganizationCreateNestedOneWithoutMembersInput } from "../inputs/OrganizationCreateNestedOneWithoutMembersInput";
import { PropertyCreateNestedManyWithoutOwnerInput } from "../inputs/PropertyCreateNestedManyWithoutOwnerInput";
import { Property_RequestCreateNestedManyWithoutUserInput } from "../inputs/Property_RequestCreateNestedManyWithoutUserInput";
import { SaveCreateNestedManyWithoutUserInput } from "../inputs/SaveCreateNestedManyWithoutUserInput";
export declare class UserCreateWithoutAddressInput {
    id?: string | undefined;
    firstName: string;
    lastName: string;
    middleName?: string | undefined;
    status?: "SEEKER" | "PROPERTYOWNER" | "INVESTORS" | undefined;
    property?: PropertyCreateNestedManyWithoutOwnerInput | undefined;
    saves?: SaveCreateNestedManyWithoutUserInput | undefined;
    advertisement?: AdvertisementCreateNestedManyWithoutUserInput | undefined;
    request?: Property_RequestCreateNestedManyWithoutUserInput | undefined;
    isVerified?: boolean | undefined;
    isRegistrated?: boolean | undefined;
    isDeleted?: boolean | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    organization?: OrganizationCreateNestedOneWithoutMembersInput | undefined;
}
