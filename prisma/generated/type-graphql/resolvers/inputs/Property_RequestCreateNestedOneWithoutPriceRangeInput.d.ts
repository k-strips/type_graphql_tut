import { Property_RequestCreateOrConnectWithoutPriceRangeInput } from "../inputs/Property_RequestCreateOrConnectWithoutPriceRangeInput";
import { Property_RequestCreateWithoutPriceRangeInput } from "../inputs/Property_RequestCreateWithoutPriceRangeInput";
import { Property_RequestWhereUniqueInput } from "../inputs/Property_RequestWhereUniqueInput";
export declare class Property_RequestCreateNestedOneWithoutPriceRangeInput {
    create?: Property_RequestCreateWithoutPriceRangeInput | undefined;
    connectOrCreate?: Property_RequestCreateOrConnectWithoutPriceRangeInput | undefined;
    connect?: Property_RequestWhereUniqueInput | undefined;
}
