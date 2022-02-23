import { OrganizationCreateOrConnectWithoutPropertiesInput } from "../inputs/OrganizationCreateOrConnectWithoutPropertiesInput";
import { OrganizationCreateWithoutPropertiesInput } from "../inputs/OrganizationCreateWithoutPropertiesInput";
import { OrganizationUpdateWithoutPropertiesInput } from "../inputs/OrganizationUpdateWithoutPropertiesInput";
import { OrganizationUpsertWithoutPropertiesInput } from "../inputs/OrganizationUpsertWithoutPropertiesInput";
import { OrganizationWhereUniqueInput } from "../inputs/OrganizationWhereUniqueInput";
export declare class OrganizationUpdateOneWithoutPropertiesInput {
    create?: OrganizationCreateWithoutPropertiesInput | undefined;
    connectOrCreate?: OrganizationCreateOrConnectWithoutPropertiesInput | undefined;
    upsert?: OrganizationUpsertWithoutPropertiesInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    connect?: OrganizationWhereUniqueInput | undefined;
    update?: OrganizationUpdateWithoutPropertiesInput | undefined;
}
