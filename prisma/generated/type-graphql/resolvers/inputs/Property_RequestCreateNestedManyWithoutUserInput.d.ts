import { Property_RequestCreateManyUserInputEnvelope } from "../inputs/Property_RequestCreateManyUserInputEnvelope";
import { Property_RequestCreateOrConnectWithoutUserInput } from "../inputs/Property_RequestCreateOrConnectWithoutUserInput";
import { Property_RequestCreateWithoutUserInput } from "../inputs/Property_RequestCreateWithoutUserInput";
import { Property_RequestWhereUniqueInput } from "../inputs/Property_RequestWhereUniqueInput";
export declare class Property_RequestCreateNestedManyWithoutUserInput {
    create?: Property_RequestCreateWithoutUserInput[] | undefined;
    connectOrCreate?: Property_RequestCreateOrConnectWithoutUserInput[] | undefined;
    createMany?: Property_RequestCreateManyUserInputEnvelope | undefined;
    connect?: Property_RequestWhereUniqueInput[] | undefined;
}
