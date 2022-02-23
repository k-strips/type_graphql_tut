import { PropertyCreateOrConnectWithoutPriceInput } from "../inputs/PropertyCreateOrConnectWithoutPriceInput";
import { PropertyCreateWithoutPriceInput } from "../inputs/PropertyCreateWithoutPriceInput";
import { PropertyWhereUniqueInput } from "../inputs/PropertyWhereUniqueInput";
export declare class PropertyCreateNestedOneWithoutPriceInput {
    create?: PropertyCreateWithoutPriceInput | undefined;
    connectOrCreate?: PropertyCreateOrConnectWithoutPriceInput | undefined;
    connect?: PropertyWhereUniqueInput | undefined;
}
