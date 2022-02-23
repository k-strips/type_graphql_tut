import { PriceCreateNestedOneWithoutAdvertisementInput } from "../inputs/PriceCreateNestedOneWithoutAdvertisementInput";
import { PropertyCreateNestedOneWithoutAdvertisementInput } from "../inputs/PropertyCreateNestedOneWithoutAdvertisementInput";
import { UserCreateNestedOneWithoutAdvertisementInput } from "../inputs/UserCreateNestedOneWithoutAdvertisementInput";
export declare class AdvertisementCreateWithoutOrganizationInput {
    id?: string | undefined;
    price?: PriceCreateNestedOneWithoutAdvertisementInput | undefined;
    isExpired?: boolean | undefined;
    isPaused?: boolean | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    user?: UserCreateNestedOneWithoutAdvertisementInput | undefined;
    property?: PropertyCreateNestedOneWithoutAdvertisementInput | undefined;
}
