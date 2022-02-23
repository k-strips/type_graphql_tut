import { PropertyCreateManyOrganizationInputEnvelope } from "../inputs/PropertyCreateManyOrganizationInputEnvelope";
import { PropertyCreateOrConnectWithoutOrganizationInput } from "../inputs/PropertyCreateOrConnectWithoutOrganizationInput";
import { PropertyCreateWithoutOrganizationInput } from "../inputs/PropertyCreateWithoutOrganizationInput";
import { PropertyWhereUniqueInput } from "../inputs/PropertyWhereUniqueInput";
export declare class PropertyCreateNestedManyWithoutOrganizationInput {
    create?: PropertyCreateWithoutOrganizationInput[] | undefined;
    connectOrCreate?: PropertyCreateOrConnectWithoutOrganizationInput[] | undefined;
    createMany?: PropertyCreateManyOrganizationInputEnvelope | undefined;
    connect?: PropertyWhereUniqueInput[] | undefined;
}
