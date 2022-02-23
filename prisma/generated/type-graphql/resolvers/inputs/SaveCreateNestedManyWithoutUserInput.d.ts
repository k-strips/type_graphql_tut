import { SaveCreateManyUserInputEnvelope } from "../inputs/SaveCreateManyUserInputEnvelope";
import { SaveCreateOrConnectWithoutUserInput } from "../inputs/SaveCreateOrConnectWithoutUserInput";
import { SaveCreateWithoutUserInput } from "../inputs/SaveCreateWithoutUserInput";
import { SaveWhereUniqueInput } from "../inputs/SaveWhereUniqueInput";
export declare class SaveCreateNestedManyWithoutUserInput {
    create?: SaveCreateWithoutUserInput[] | undefined;
    connectOrCreate?: SaveCreateOrConnectWithoutUserInput[] | undefined;
    createMany?: SaveCreateManyUserInputEnvelope | undefined;
    connect?: SaveWhereUniqueInput[] | undefined;
}
