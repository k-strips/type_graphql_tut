import { PriceCreateOrConnectWithoutAdvertisementInput } from "../inputs/PriceCreateOrConnectWithoutAdvertisementInput";
import { PriceCreateWithoutAdvertisementInput } from "../inputs/PriceCreateWithoutAdvertisementInput";
import { PriceUpdateWithoutAdvertisementInput } from "../inputs/PriceUpdateWithoutAdvertisementInput";
import { PriceUpsertWithoutAdvertisementInput } from "../inputs/PriceUpsertWithoutAdvertisementInput";
import { PriceWhereUniqueInput } from "../inputs/PriceWhereUniqueInput";
export declare class PriceUpdateOneWithoutAdvertisementInput {
    create?: PriceCreateWithoutAdvertisementInput | undefined;
    connectOrCreate?: PriceCreateOrConnectWithoutAdvertisementInput | undefined;
    upsert?: PriceUpsertWithoutAdvertisementInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    connect?: PriceWhereUniqueInput | undefined;
    update?: PriceUpdateWithoutAdvertisementInput | undefined;
}
