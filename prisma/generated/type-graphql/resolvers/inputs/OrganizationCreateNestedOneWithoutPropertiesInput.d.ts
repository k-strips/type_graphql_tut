import { OrganizationCreateOrConnectWithoutPropertiesInput } from "../inputs/OrganizationCreateOrConnectWithoutPropertiesInput";
import { OrganizationCreateWithoutPropertiesInput } from "../inputs/OrganizationCreateWithoutPropertiesInput";
import { OrganizationWhereUniqueInput } from "../inputs/OrganizationWhereUniqueInput";
export declare class OrganizationCreateNestedOneWithoutPropertiesInput {
    create?: OrganizationCreateWithoutPropertiesInput | undefined;
    connectOrCreate?: OrganizationCreateOrConnectWithoutPropertiesInput | undefined;
    connect?: OrganizationWhereUniqueInput | undefined;
}
