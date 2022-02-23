import { SaveCreateManyPropertyInputEnvelope } from "../inputs/SaveCreateManyPropertyInputEnvelope";
import { SaveCreateOrConnectWithoutPropertyInput } from "../inputs/SaveCreateOrConnectWithoutPropertyInput";
import { SaveCreateWithoutPropertyInput } from "../inputs/SaveCreateWithoutPropertyInput";
import { SaveWhereUniqueInput } from "../inputs/SaveWhereUniqueInput";
export declare class SaveCreateNestedManyWithoutPropertyInput {
    create?: SaveCreateWithoutPropertyInput[] | undefined;
    connectOrCreate?: SaveCreateOrConnectWithoutPropertyInput[] | undefined;
    createMany?: SaveCreateManyPropertyInputEnvelope | undefined;
    connect?: SaveWhereUniqueInput[] | undefined;
}
