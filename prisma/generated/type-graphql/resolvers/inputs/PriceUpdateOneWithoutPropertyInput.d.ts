import { PriceCreateOrConnectWithoutPropertyInput } from "../inputs/PriceCreateOrConnectWithoutPropertyInput";
import { PriceCreateWithoutPropertyInput } from "../inputs/PriceCreateWithoutPropertyInput";
import { PriceUpdateWithoutPropertyInput } from "../inputs/PriceUpdateWithoutPropertyInput";
import { PriceUpsertWithoutPropertyInput } from "../inputs/PriceUpsertWithoutPropertyInput";
import { PriceWhereUniqueInput } from "../inputs/PriceWhereUniqueInput";
export declare class PriceUpdateOneWithoutPropertyInput {
    create?: PriceCreateWithoutPropertyInput | undefined;
    connectOrCreate?: PriceCreateOrConnectWithoutPropertyInput | undefined;
    upsert?: PriceUpsertWithoutPropertyInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    connect?: PriceWhereUniqueInput | undefined;
    update?: PriceUpdateWithoutPropertyInput | undefined;
}
