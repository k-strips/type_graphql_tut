import { OrganizationCreateNestedOneWithoutAdvertisementInput } from "../inputs/OrganizationCreateNestedOneWithoutAdvertisementInput";
import { PriceCreateNestedOneWithoutAdvertisementInput } from "../inputs/PriceCreateNestedOneWithoutAdvertisementInput";
import { UserCreateNestedOneWithoutAdvertisementInput } from "../inputs/UserCreateNestedOneWithoutAdvertisementInput";
export declare class AdvertisementCreateWithoutPropertyInput {
    id?: string | undefined;
    price?: PriceCreateNestedOneWithoutAdvertisementInput | undefined;
    isExpired?: boolean | undefined;
    isPaused?: boolean | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    user?: UserCreateNestedOneWithoutAdvertisementInput | undefined;
    organization?: OrganizationCreateNestedOneWithoutAdvertisementInput | undefined;
}
