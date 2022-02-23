import { SaveCreateManyUserInputEnvelope } from "../inputs/SaveCreateManyUserInputEnvelope";
import { SaveCreateOrConnectWithoutUserInput } from "../inputs/SaveCreateOrConnectWithoutUserInput";
import { SaveCreateWithoutUserInput } from "../inputs/SaveCreateWithoutUserInput";
import { SaveScalarWhereInput } from "../inputs/SaveScalarWhereInput";
import { SaveUpdateManyWithWhereWithoutUserInput } from "../inputs/SaveUpdateManyWithWhereWithoutUserInput";
import { SaveUpdateWithWhereUniqueWithoutUserInput } from "../inputs/SaveUpdateWithWhereUniqueWithoutUserInput";
import { SaveUpsertWithWhereUniqueWithoutUserInput } from "../inputs/SaveUpsertWithWhereUniqueWithoutUserInput";
import { SaveWhereUniqueInput } from "../inputs/SaveWhereUniqueInput";
export declare class SaveUpdateManyWithoutUserInput {
    create?: SaveCreateWithoutUserInput[] | undefined;
    connectOrCreate?: SaveCreateOrConnectWithoutUserInput[] | undefined;
    upsert?: SaveUpsertWithWhereUniqueWithoutUserInput[] | undefined;
    createMany?: SaveCreateManyUserInputEnvelope | undefined;
    set?: SaveWhereUniqueInput[] | undefined;
    disconnect?: SaveWhereUniqueInput[] | undefined;
    delete?: SaveWhereUniqueInput[] | undefined;
    connect?: SaveWhereUniqueInput[] | undefined;
    update?: SaveUpdateWithWhereUniqueWithoutUserInput[] | undefined;
    updateMany?: SaveUpdateManyWithWhereWithoutUserInput[] | undefined;
    deleteMany?: SaveScalarWhereInput[] | undefined;
}
