import { PropertyCreateOrConnectWithoutLikesInput } from "../inputs/PropertyCreateOrConnectWithoutLikesInput";
import { PropertyCreateWithoutLikesInput } from "../inputs/PropertyCreateWithoutLikesInput";
import { PropertyWhereUniqueInput } from "../inputs/PropertyWhereUniqueInput";
export declare class PropertyCreateNestedOneWithoutLikesInput {
    create?: PropertyCreateWithoutLikesInput | undefined;
    connectOrCreate?: PropertyCreateOrConnectWithoutLikesInput | undefined;
    connect?: PropertyWhereUniqueInput | undefined;
}
