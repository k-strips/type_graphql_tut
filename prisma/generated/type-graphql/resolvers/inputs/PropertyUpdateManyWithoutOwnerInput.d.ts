import { PropertyCreateManyOwnerInputEnvelope } from "../inputs/PropertyCreateManyOwnerInputEnvelope";
import { PropertyCreateOrConnectWithoutOwnerInput } from "../inputs/PropertyCreateOrConnectWithoutOwnerInput";
import { PropertyCreateWithoutOwnerInput } from "../inputs/PropertyCreateWithoutOwnerInput";
import { PropertyScalarWhereInput } from "../inputs/PropertyScalarWhereInput";
import { PropertyUpdateManyWithWhereWithoutOwnerInput } from "../inputs/PropertyUpdateManyWithWhereWithoutOwnerInput";
import { PropertyUpdateWithWhereUniqueWithoutOwnerInput } from "../inputs/PropertyUpdateWithWhereUniqueWithoutOwnerInput";
import { PropertyUpsertWithWhereUniqueWithoutOwnerInput } from "../inputs/PropertyUpsertWithWhereUniqueWithoutOwnerInput";
import { PropertyWhereUniqueInput } from "../inputs/PropertyWhereUniqueInput";
export declare class PropertyUpdateManyWithoutOwnerInput {
    create?: PropertyCreateWithoutOwnerInput[] | undefined;
    connectOrCreate?: PropertyCreateOrConnectWithoutOwnerInput[] | undefined;
    upsert?: PropertyUpsertWithWhereUniqueWithoutOwnerInput[] | undefined;
    createMany?: PropertyCreateManyOwnerInputEnvelope | undefined;
    set?: PropertyWhereUniqueInput[] | undefined;
    disconnect?: PropertyWhereUniqueInput[] | undefined;
    delete?: PropertyWhereUniqueInput[] | undefined;
    connect?: PropertyWhereUniqueInput[] | undefined;
    update?: PropertyUpdateWithWhereUniqueWithoutOwnerInput[] | undefined;
    updateMany?: PropertyUpdateManyWithWhereWithoutOwnerInput[] | undefined;
    deleteMany?: PropertyScalarWhereInput[] | undefined;
}
