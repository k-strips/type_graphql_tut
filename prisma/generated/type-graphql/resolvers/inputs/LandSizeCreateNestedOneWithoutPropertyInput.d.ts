import { LandSizeCreateOrConnectWithoutPropertyInput } from "../inputs/LandSizeCreateOrConnectWithoutPropertyInput";
import { LandSizeCreateWithoutPropertyInput } from "../inputs/LandSizeCreateWithoutPropertyInput";
import { LandSizeWhereUniqueInput } from "../inputs/LandSizeWhereUniqueInput";
export declare class LandSizeCreateNestedOneWithoutPropertyInput {
    create?: LandSizeCreateWithoutPropertyInput | undefined;
    connectOrCreate?: LandSizeCreateOrConnectWithoutPropertyInput | undefined;
    connect?: LandSizeWhereUniqueInput | undefined;
}
