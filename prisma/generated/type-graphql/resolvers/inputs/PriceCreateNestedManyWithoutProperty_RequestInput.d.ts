import { PriceCreateManyProperty_RequestInputEnvelope } from "../inputs/PriceCreateManyProperty_RequestInputEnvelope";
import { PriceCreateOrConnectWithoutProperty_RequestInput } from "../inputs/PriceCreateOrConnectWithoutProperty_RequestInput";
import { PriceCreateWithoutProperty_RequestInput } from "../inputs/PriceCreateWithoutProperty_RequestInput";
import { PriceWhereUniqueInput } from "../inputs/PriceWhereUniqueInput";
export declare class PriceCreateNestedManyWithoutProperty_RequestInput {
    create?: PriceCreateWithoutProperty_RequestInput[] | undefined;
    connectOrCreate?: PriceCreateOrConnectWithoutProperty_RequestInput[] | undefined;
    createMany?: PriceCreateManyProperty_RequestInputEnvelope | undefined;
    connect?: PriceWhereUniqueInput[] | undefined;
}
