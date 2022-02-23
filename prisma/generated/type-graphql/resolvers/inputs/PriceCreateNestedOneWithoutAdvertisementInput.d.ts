import { PriceCreateOrConnectWithoutAdvertisementInput } from "../inputs/PriceCreateOrConnectWithoutAdvertisementInput";
import { PriceCreateWithoutAdvertisementInput } from "../inputs/PriceCreateWithoutAdvertisementInput";
import { PriceWhereUniqueInput } from "../inputs/PriceWhereUniqueInput";
export declare class PriceCreateNestedOneWithoutAdvertisementInput {
    create?: PriceCreateWithoutAdvertisementInput | undefined;
    connectOrCreate?: PriceCreateOrConnectWithoutAdvertisementInput | undefined;
    connect?: PriceWhereUniqueInput | undefined;
}
