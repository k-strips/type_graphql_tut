import { SaveCreateManyPropertyInputEnvelope } from "../inputs/SaveCreateManyPropertyInputEnvelope";
import { SaveCreateOrConnectWithoutPropertyInput } from "../inputs/SaveCreateOrConnectWithoutPropertyInput";
import { SaveCreateWithoutPropertyInput } from "../inputs/SaveCreateWithoutPropertyInput";
import { SaveScalarWhereInput } from "../inputs/SaveScalarWhereInput";
import { SaveUpdateManyWithWhereWithoutPropertyInput } from "../inputs/SaveUpdateManyWithWhereWithoutPropertyInput";
import { SaveUpdateWithWhereUniqueWithoutPropertyInput } from "../inputs/SaveUpdateWithWhereUniqueWithoutPropertyInput";
import { SaveUpsertWithWhereUniqueWithoutPropertyInput } from "../inputs/SaveUpsertWithWhereUniqueWithoutPropertyInput";
import { SaveWhereUniqueInput } from "../inputs/SaveWhereUniqueInput";
export declare class SaveUpdateManyWithoutPropertyInput {
    create?: SaveCreateWithoutPropertyInput[] | undefined;
    connectOrCreate?: SaveCreateOrConnectWithoutPropertyInput[] | undefined;
    upsert?: SaveUpsertWithWhereUniqueWithoutPropertyInput[] | undefined;
    createMany?: SaveCreateManyPropertyInputEnvelope | undefined;
    set?: SaveWhereUniqueInput[] | undefined;
    disconnect?: SaveWhereUniqueInput[] | undefined;
    delete?: SaveWhereUniqueInput[] | undefined;
    connect?: SaveWhereUniqueInput[] | undefined;
    update?: SaveUpdateWithWhereUniqueWithoutPropertyInput[] | undefined;
    updateMany?: SaveUpdateManyWithWhereWithoutPropertyInput[] | undefined;
    deleteMany?: SaveScalarWhereInput[] | undefined;
}
