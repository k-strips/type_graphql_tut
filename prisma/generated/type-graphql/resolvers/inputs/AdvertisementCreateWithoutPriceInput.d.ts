import { OrganizationCreateNestedOneWithoutAdvertisementInput } from "../inputs/OrganizationCreateNestedOneWithoutAdvertisementInput";
import { PropertyCreateNestedOneWithoutAdvertisementInput } from "../inputs/PropertyCreateNestedOneWithoutAdvertisementInput";
import { UserCreateNestedOneWithoutAdvertisementInput } from "../inputs/UserCreateNestedOneWithoutAdvertisementInput";
export declare class AdvertisementCreateWithoutPriceInput {
    id?: string | undefined;
    isExpired?: boolean | undefined;
    isPaused?: boolean | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    user?: UserCreateNestedOneWithoutAdvertisementInput | undefined;
    organization?: OrganizationCreateNestedOneWithoutAdvertisementInput | undefined;
    property?: PropertyCreateNestedOneWithoutAdvertisementInput | undefined;
}
