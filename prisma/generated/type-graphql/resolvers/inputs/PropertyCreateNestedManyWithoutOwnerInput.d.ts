import { PropertyCreateManyOwnerInputEnvelope } from "../inputs/PropertyCreateManyOwnerInputEnvelope";
import { PropertyCreateOrConnectWithoutOwnerInput } from "../inputs/PropertyCreateOrConnectWithoutOwnerInput";
import { PropertyCreateWithoutOwnerInput } from "../inputs/PropertyCreateWithoutOwnerInput";
import { PropertyWhereUniqueInput } from "../inputs/PropertyWhereUniqueInput";
export declare class PropertyCreateNestedManyWithoutOwnerInput {
    create?: PropertyCreateWithoutOwnerInput[] | undefined;
    connectOrCreate?: PropertyCreateOrConnectWithoutOwnerInput[] | undefined;
    createMany?: PropertyCreateManyOwnerInputEnvelope | undefined;
    connect?: PropertyWhereUniqueInput[] | undefined;
}
