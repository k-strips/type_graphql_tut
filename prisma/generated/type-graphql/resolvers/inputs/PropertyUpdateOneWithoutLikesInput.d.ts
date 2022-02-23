import { PropertyCreateOrConnectWithoutLikesInput } from "../inputs/PropertyCreateOrConnectWithoutLikesInput";
import { PropertyCreateWithoutLikesInput } from "../inputs/PropertyCreateWithoutLikesInput";
import { PropertyUpdateWithoutLikesInput } from "../inputs/PropertyUpdateWithoutLikesInput";
import { PropertyUpsertWithoutLikesInput } from "../inputs/PropertyUpsertWithoutLikesInput";
import { PropertyWhereUniqueInput } from "../inputs/PropertyWhereUniqueInput";
export declare class PropertyUpdateOneWithoutLikesInput {
    create?: PropertyCreateWithoutLikesInput | undefined;
    connectOrCreate?: PropertyCreateOrConnectWithoutLikesInput | undefined;
    upsert?: PropertyUpsertWithoutLikesInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    connect?: PropertyWhereUniqueInput | undefined;
    update?: PropertyUpdateWithoutLikesInput | undefined;
}
