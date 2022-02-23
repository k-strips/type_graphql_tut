import { PropertyCreateManyOrganizationInputEnvelope } from "../inputs/PropertyCreateManyOrganizationInputEnvelope";
import { PropertyCreateOrConnectWithoutOrganizationInput } from "../inputs/PropertyCreateOrConnectWithoutOrganizationInput";
import { PropertyCreateWithoutOrganizationInput } from "../inputs/PropertyCreateWithoutOrganizationInput";
import { PropertyScalarWhereInput } from "../inputs/PropertyScalarWhereInput";
import { PropertyUpdateManyWithWhereWithoutOrganizationInput } from "../inputs/PropertyUpdateManyWithWhereWithoutOrganizationInput";
import { PropertyUpdateWithWhereUniqueWithoutOrganizationInput } from "../inputs/PropertyUpdateWithWhereUniqueWithoutOrganizationInput";
import { PropertyUpsertWithWhereUniqueWithoutOrganizationInput } from "../inputs/PropertyUpsertWithWhereUniqueWithoutOrganizationInput";
import { PropertyWhereUniqueInput } from "../inputs/PropertyWhereUniqueInput";
export declare class PropertyUpdateManyWithoutOrganizationInput {
    create?: PropertyCreateWithoutOrganizationInput[] | undefined;
    connectOrCreate?: PropertyCreateOrConnectWithoutOrganizationInput[] | undefined;
    upsert?: PropertyUpsertWithWhereUniqueWithoutOrganizationInput[] | undefined;
    createMany?: PropertyCreateManyOrganizationInputEnvelope | undefined;
    set?: PropertyWhereUniqueInput[] | undefined;
    disconnect?: PropertyWhereUniqueInput[] | undefined;
    delete?: PropertyWhereUniqueInput[] | undefined;
    connect?: PropertyWhereUniqueInput[] | undefined;
    update?: PropertyUpdateWithWhereUniqueWithoutOrganizationInput[] | undefined;
    updateMany?: PropertyUpdateManyWithWhereWithoutOrganizationInput[] | undefined;
    deleteMany?: PropertyScalarWhereInput[] | undefined;
}
