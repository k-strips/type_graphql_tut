import { PropertyCreateOrConnectWithoutAdvertisementInput } from "../inputs/PropertyCreateOrConnectWithoutAdvertisementInput";
import { PropertyCreateWithoutAdvertisementInput } from "../inputs/PropertyCreateWithoutAdvertisementInput";
import { PropertyWhereUniqueInput } from "../inputs/PropertyWhereUniqueInput";
export declare class PropertyCreateNestedOneWithoutAdvertisementInput {
    create?: PropertyCreateWithoutAdvertisementInput | undefined;
    connectOrCreate?: PropertyCreateOrConnectWithoutAdvertisementInput | undefined;
    connect?: PropertyWhereUniqueInput | undefined;
}
