import { LandSizeCreateOrConnectWithoutProperty_RequestInput } from "../inputs/LandSizeCreateOrConnectWithoutProperty_RequestInput";
import { LandSizeCreateWithoutProperty_RequestInput } from "../inputs/LandSizeCreateWithoutProperty_RequestInput";
import { LandSizeUpdateWithoutProperty_RequestInput } from "../inputs/LandSizeUpdateWithoutProperty_RequestInput";
import { LandSizeUpsertWithoutProperty_RequestInput } from "../inputs/LandSizeUpsertWithoutProperty_RequestInput";
import { LandSizeWhereUniqueInput } from "../inputs/LandSizeWhereUniqueInput";
export declare class LandSizeUpdateOneWithoutProperty_RequestInput {
    create?: LandSizeCreateWithoutProperty_RequestInput | undefined;
    connectOrCreate?: LandSizeCreateOrConnectWithoutProperty_RequestInput | undefined;
    upsert?: LandSizeUpsertWithoutProperty_RequestInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    connect?: LandSizeWhereUniqueInput | undefined;
    update?: LandSizeUpdateWithoutProperty_RequestInput | undefined;
}
