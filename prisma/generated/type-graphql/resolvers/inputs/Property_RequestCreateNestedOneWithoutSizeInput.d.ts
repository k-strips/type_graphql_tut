import { Property_RequestCreateOrConnectWithoutSizeInput } from "../inputs/Property_RequestCreateOrConnectWithoutSizeInput";
import { Property_RequestCreateWithoutSizeInput } from "../inputs/Property_RequestCreateWithoutSizeInput";
import { Property_RequestWhereUniqueInput } from "../inputs/Property_RequestWhereUniqueInput";
export declare class Property_RequestCreateNestedOneWithoutSizeInput {
    create?: Property_RequestCreateWithoutSizeInput | undefined;
    connectOrCreate?: Property_RequestCreateOrConnectWithoutSizeInput | undefined;
    connect?: Property_RequestWhereUniqueInput | undefined;
}
