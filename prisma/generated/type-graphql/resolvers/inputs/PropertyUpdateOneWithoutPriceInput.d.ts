import { PropertyCreateOrConnectWithoutPriceInput } from "../inputs/PropertyCreateOrConnectWithoutPriceInput";
import { PropertyCreateWithoutPriceInput } from "../inputs/PropertyCreateWithoutPriceInput";
import { PropertyUpdateWithoutPriceInput } from "../inputs/PropertyUpdateWithoutPriceInput";
import { PropertyUpsertWithoutPriceInput } from "../inputs/PropertyUpsertWithoutPriceInput";
import { PropertyWhereUniqueInput } from "../inputs/PropertyWhereUniqueInput";
export declare class PropertyUpdateOneWithoutPriceInput {
    create?: PropertyCreateWithoutPriceInput | undefined;
    connectOrCreate?: PropertyCreateOrConnectWithoutPriceInput | undefined;
    upsert?: PropertyUpsertWithoutPriceInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    connect?: PropertyWhereUniqueInput | undefined;
    update?: PropertyUpdateWithoutPriceInput | undefined;
}
