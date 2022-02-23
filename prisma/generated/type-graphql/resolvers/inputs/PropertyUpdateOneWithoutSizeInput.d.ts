import { PropertyCreateOrConnectWithoutSizeInput } from "../inputs/PropertyCreateOrConnectWithoutSizeInput";
import { PropertyCreateWithoutSizeInput } from "../inputs/PropertyCreateWithoutSizeInput";
import { PropertyUpdateWithoutSizeInput } from "../inputs/PropertyUpdateWithoutSizeInput";
import { PropertyUpsertWithoutSizeInput } from "../inputs/PropertyUpsertWithoutSizeInput";
import { PropertyWhereUniqueInput } from "../inputs/PropertyWhereUniqueInput";
export declare class PropertyUpdateOneWithoutSizeInput {
    create?: PropertyCreateWithoutSizeInput | undefined;
    connectOrCreate?: PropertyCreateOrConnectWithoutSizeInput | undefined;
    upsert?: PropertyUpsertWithoutSizeInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    connect?: PropertyWhereUniqueInput | undefined;
    update?: PropertyUpdateWithoutSizeInput | undefined;
}
