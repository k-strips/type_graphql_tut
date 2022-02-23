import { OrganizationCreateNestedOneWithoutAdvertisementInput } from "../inputs/OrganizationCreateNestedOneWithoutAdvertisementInput";
import { PriceCreateNestedOneWithoutAdvertisementInput } from "../inputs/PriceCreateNestedOneWithoutAdvertisementInput";
import { PropertyCreateNestedOneWithoutAdvertisementInput } from "../inputs/PropertyCreateNestedOneWithoutAdvertisementInput";
export declare class AdvertisementCreateWithoutUserInput {
    id?: string | undefined;
    price?: PriceCreateNestedOneWithoutAdvertisementInput | undefined;
    isExpired?: boolean | undefined;
    isPaused?: boolean | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    organization?: OrganizationCreateNestedOneWithoutAdvertisementInput | undefined;
    property?: PropertyCreateNestedOneWithoutAdvertisementInput | undefined;
}
