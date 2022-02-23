import { OrganizationCreateNestedOneWithoutAdvertisementInput } from "../inputs/OrganizationCreateNestedOneWithoutAdvertisementInput";
import { PriceCreateNestedOneWithoutAdvertisementInput } from "../inputs/PriceCreateNestedOneWithoutAdvertisementInput";
import { PropertyCreateNestedOneWithoutAdvertisementInput } from "../inputs/PropertyCreateNestedOneWithoutAdvertisementInput";
import { UserCreateNestedOneWithoutAdvertisementInput } from "../inputs/UserCreateNestedOneWithoutAdvertisementInput";
export declare class AdvertisementCreateInput {
    id?: string | undefined;
    price?: PriceCreateNestedOneWithoutAdvertisementInput | undefined;
    isExpired?: boolean | undefined;
    isPaused?: boolean | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    user?: UserCreateNestedOneWithoutAdvertisementInput | undefined;
    organization?: OrganizationCreateNestedOneWithoutAdvertisementInput | undefined;
    property?: PropertyCreateNestedOneWithoutAdvertisementInput | undefined;
}
