import { Property_RequestCreateOrConnectWithoutPriceRangeInput } from "../inputs/Property_RequestCreateOrConnectWithoutPriceRangeInput";
import { Property_RequestCreateWithoutPriceRangeInput } from "../inputs/Property_RequestCreateWithoutPriceRangeInput";
import { Property_RequestUpdateWithoutPriceRangeInput } from "../inputs/Property_RequestUpdateWithoutPriceRangeInput";
import { Property_RequestUpsertWithoutPriceRangeInput } from "../inputs/Property_RequestUpsertWithoutPriceRangeInput";
import { Property_RequestWhereUniqueInput } from "../inputs/Property_RequestWhereUniqueInput";
export declare class Property_RequestUpdateOneWithoutPriceRangeInput {
    create?: Property_RequestCreateWithoutPriceRangeInput | undefined;
    connectOrCreate?: Property_RequestCreateOrConnectWithoutPriceRangeInput | undefined;
    upsert?: Property_RequestUpsertWithoutPriceRangeInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    connect?: Property_RequestWhereUniqueInput | undefined;
    update?: Property_RequestUpdateWithoutPriceRangeInput | undefined;
}
