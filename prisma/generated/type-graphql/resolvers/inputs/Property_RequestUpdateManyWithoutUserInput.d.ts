import { Property_RequestCreateManyUserInputEnvelope } from "../inputs/Property_RequestCreateManyUserInputEnvelope";
import { Property_RequestCreateOrConnectWithoutUserInput } from "../inputs/Property_RequestCreateOrConnectWithoutUserInput";
import { Property_RequestCreateWithoutUserInput } from "../inputs/Property_RequestCreateWithoutUserInput";
import { Property_RequestScalarWhereInput } from "../inputs/Property_RequestScalarWhereInput";
import { Property_RequestUpdateManyWithWhereWithoutUserInput } from "../inputs/Property_RequestUpdateManyWithWhereWithoutUserInput";
import { Property_RequestUpdateWithWhereUniqueWithoutUserInput } from "../inputs/Property_RequestUpdateWithWhereUniqueWithoutUserInput";
import { Property_RequestUpsertWithWhereUniqueWithoutUserInput } from "../inputs/Property_RequestUpsertWithWhereUniqueWithoutUserInput";
import { Property_RequestWhereUniqueInput } from "../inputs/Property_RequestWhereUniqueInput";
export declare class Property_RequestUpdateManyWithoutUserInput {
    create?: Property_RequestCreateWithoutUserInput[] | undefined;
    connectOrCreate?: Property_RequestCreateOrConnectWithoutUserInput[] | undefined;
    upsert?: Property_RequestUpsertWithWhereUniqueWithoutUserInput[] | undefined;
    createMany?: Property_RequestCreateManyUserInputEnvelope | undefined;
    set?: Property_RequestWhereUniqueInput[] | undefined;
    disconnect?: Property_RequestWhereUniqueInput[] | undefined;
    delete?: Property_RequestWhereUniqueInput[] | undefined;
    connect?: Property_RequestWhereUniqueInput[] | undefined;
    update?: Property_RequestUpdateWithWhereUniqueWithoutUserInput[] | undefined;
    updateMany?: Property_RequestUpdateManyWithWhereWithoutUserInput[] | undefined;
    deleteMany?: Property_RequestScalarWhereInput[] | undefined;
}
