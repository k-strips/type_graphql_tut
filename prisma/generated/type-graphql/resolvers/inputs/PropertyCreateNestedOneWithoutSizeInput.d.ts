import { PropertyCreateOrConnectWithoutSizeInput } from "../inputs/PropertyCreateOrConnectWithoutSizeInput";
import { PropertyCreateWithoutSizeInput } from "../inputs/PropertyCreateWithoutSizeInput";
import { PropertyWhereUniqueInput } from "../inputs/PropertyWhereUniqueInput";
export declare class PropertyCreateNestedOneWithoutSizeInput {
    create?: PropertyCreateWithoutSizeInput | undefined;
    connectOrCreate?: PropertyCreateOrConnectWithoutSizeInput | undefined;
    connect?: PropertyWhereUniqueInput | undefined;
}
