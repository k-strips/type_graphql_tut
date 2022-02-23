import { LandSizeCreateOrConnectWithoutPropertyInput } from "../inputs/LandSizeCreateOrConnectWithoutPropertyInput";
import { LandSizeCreateWithoutPropertyInput } from "../inputs/LandSizeCreateWithoutPropertyInput";
import { LandSizeUpdateWithoutPropertyInput } from "../inputs/LandSizeUpdateWithoutPropertyInput";
import { LandSizeUpsertWithoutPropertyInput } from "../inputs/LandSizeUpsertWithoutPropertyInput";
import { LandSizeWhereUniqueInput } from "../inputs/LandSizeWhereUniqueInput";
export declare class LandSizeUpdateOneWithoutPropertyInput {
    create?: LandSizeCreateWithoutPropertyInput | undefined;
    connectOrCreate?: LandSizeCreateOrConnectWithoutPropertyInput | undefined;
    upsert?: LandSizeUpsertWithoutPropertyInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    connect?: LandSizeWhereUniqueInput | undefined;
    update?: LandSizeUpdateWithoutPropertyInput | undefined;
}
