import { PriceCreateManyProperty_RequestInputEnvelope } from "../inputs/PriceCreateManyProperty_RequestInputEnvelope";
import { PriceCreateOrConnectWithoutProperty_RequestInput } from "../inputs/PriceCreateOrConnectWithoutProperty_RequestInput";
import { PriceCreateWithoutProperty_RequestInput } from "../inputs/PriceCreateWithoutProperty_RequestInput";
import { PriceScalarWhereInput } from "../inputs/PriceScalarWhereInput";
import { PriceUpdateManyWithWhereWithoutProperty_RequestInput } from "../inputs/PriceUpdateManyWithWhereWithoutProperty_RequestInput";
import { PriceUpdateWithWhereUniqueWithoutProperty_RequestInput } from "../inputs/PriceUpdateWithWhereUniqueWithoutProperty_RequestInput";
import { PriceUpsertWithWhereUniqueWithoutProperty_RequestInput } from "../inputs/PriceUpsertWithWhereUniqueWithoutProperty_RequestInput";
import { PriceWhereUniqueInput } from "../inputs/PriceWhereUniqueInput";
export declare class PriceUpdateManyWithoutProperty_RequestInput {
    create?: PriceCreateWithoutProperty_RequestInput[] | undefined;
    connectOrCreate?: PriceCreateOrConnectWithoutProperty_RequestInput[] | undefined;
    upsert?: PriceUpsertWithWhereUniqueWithoutProperty_RequestInput[] | undefined;
    createMany?: PriceCreateManyProperty_RequestInputEnvelope | undefined;
    set?: PriceWhereUniqueInput[] | undefined;
    disconnect?: PriceWhereUniqueInput[] | undefined;
    delete?: PriceWhereUniqueInput[] | undefined;
    connect?: PriceWhereUniqueInput[] | undefined;
    update?: PriceUpdateWithWhereUniqueWithoutProperty_RequestInput[] | undefined;
    updateMany?: PriceUpdateManyWithWhereWithoutProperty_RequestInput[] | undefined;
    deleteMany?: PriceScalarWhereInput[] | undefined;
}
