import { LandSizeCreateOrConnectWithoutProperty_RequestInput } from "../inputs/LandSizeCreateOrConnectWithoutProperty_RequestInput";
import { LandSizeCreateWithoutProperty_RequestInput } from "../inputs/LandSizeCreateWithoutProperty_RequestInput";
import { LandSizeWhereUniqueInput } from "../inputs/LandSizeWhereUniqueInput";
export declare class LandSizeCreateNestedOneWithoutProperty_RequestInput {
    create?: LandSizeCreateWithoutProperty_RequestInput | undefined;
    connectOrCreate?: LandSizeCreateOrConnectWithoutProperty_RequestInput | undefined;
    connect?: LandSizeWhereUniqueInput | undefined;
}
