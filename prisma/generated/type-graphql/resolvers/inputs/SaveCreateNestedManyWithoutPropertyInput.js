"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveCreateNestedManyWithoutPropertyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SaveCreateManyPropertyInputEnvelope_1 = require("../inputs/SaveCreateManyPropertyInputEnvelope");
const SaveCreateOrConnectWithoutPropertyInput_1 = require("../inputs/SaveCreateOrConnectWithoutPropertyInput");
const SaveCreateWithoutPropertyInput_1 = require("../inputs/SaveCreateWithoutPropertyInput");
const SaveWhereUniqueInput_1 = require("../inputs/SaveWhereUniqueInput");
let SaveCreateNestedManyWithoutPropertyInput = class SaveCreateNestedManyWithoutPropertyInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [SaveCreateWithoutPropertyInput_1.SaveCreateWithoutPropertyInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], SaveCreateNestedManyWithoutPropertyInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [SaveCreateOrConnectWithoutPropertyInput_1.SaveCreateOrConnectWithoutPropertyInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], SaveCreateNestedManyWithoutPropertyInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SaveCreateManyPropertyInputEnvelope_1.SaveCreateManyPropertyInputEnvelope, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", SaveCreateManyPropertyInputEnvelope_1.SaveCreateManyPropertyInputEnvelope)
], SaveCreateNestedManyWithoutPropertyInput.prototype, "createMany", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [SaveWhereUniqueInput_1.SaveWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], SaveCreateNestedManyWithoutPropertyInput.prototype, "connect", void 0);
SaveCreateNestedManyWithoutPropertyInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("SaveCreateNestedManyWithoutPropertyInput", {
        isAbstract: true
    })
], SaveCreateNestedManyWithoutPropertyInput);
exports.SaveCreateNestedManyWithoutPropertyInput = SaveCreateNestedManyWithoutPropertyInput;
