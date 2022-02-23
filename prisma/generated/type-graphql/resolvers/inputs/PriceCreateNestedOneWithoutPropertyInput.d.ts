import { PriceCreateOrConnectWithoutPropertyInput } from "../inputs/PriceCreateOrConnectWithoutPropertyInput";
import { PriceCreateWithoutPropertyInput } from "../inputs/PriceCreateWithoutPropertyInput";
import { PriceWhereUniqueInput } from "../inputs/PriceWhereUniqueInput";
export declare class PriceCreateNestedOneWithoutPropertyInput {
    create?: PriceCreateWithoutPropertyInput | undefined;
    connectOrCreate?: PriceCreateOrConnectWithoutPropertyInput | undefined;
    connect?: PriceWhereUniqueInput | undefined;
}
