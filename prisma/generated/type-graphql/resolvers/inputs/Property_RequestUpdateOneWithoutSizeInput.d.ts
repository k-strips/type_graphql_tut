import { Property_RequestCreateOrConnectWithoutSizeInput } from "../inputs/Property_RequestCreateOrConnectWithoutSizeInput";
import { Property_RequestCreateWithoutSizeInput } from "../inputs/Property_RequestCreateWithoutSizeInput";
import { Property_RequestUpdateWithoutSizeInput } from "../inputs/Property_RequestUpdateWithoutSizeInput";
import { Property_RequestUpsertWithoutSizeInput } from "../inputs/Property_RequestUpsertWithoutSizeInput";
import { Property_RequestWhereUniqueInput } from "../inputs/Property_RequestWhereUniqueInput";
export declare class Property_RequestUpdateOneWithoutSizeInput {
    create?: Property_RequestCreateWithoutSizeInput | undefined;
    connectOrCreate?: Property_RequestCreateOrConnectWithoutSizeInput | undefined;
    upsert?: Property_RequestUpsertWithoutSizeInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    connect?: Property_RequestWhereUniqueInput | undefined;
    update?: Property_RequestUpdateWithoutSizeInput | undefined;
}
