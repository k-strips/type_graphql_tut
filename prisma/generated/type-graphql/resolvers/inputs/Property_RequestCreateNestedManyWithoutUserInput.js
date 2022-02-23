"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Property_RequestCreateNestedManyWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Property_RequestCreateManyUserInputEnvelope_1 = require("../inputs/Property_RequestCreateManyUserInputEnvelope");
const Property_RequestCreateOrConnectWithoutUserInput_1 = require("../inputs/Property_RequestCreateOrConnectWithoutUserInput");
const Property_RequestCreateWithoutUserInput_1 = require("../inputs/Property_RequestCreateWithoutUserInput");
const Property_RequestWhereUniqueInput_1 = require("../inputs/Property_RequestWhereUniqueInput");
let Property_RequestCreateNestedManyWithoutUserInput = class Property_RequestCreateNestedManyWithoutUserInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [Property_RequestCreateWithoutUserInput_1.Property_RequestCreateWithoutUserInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], Property_RequestCreateNestedManyWithoutUserInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [Property_RequestCreateOrConnectWithoutUserInput_1.Property_RequestCreateOrConnectWithoutUserInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], Property_RequestCreateNestedManyWithoutUserInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Property_RequestCreateManyUserInputEnvelope_1.Property_RequestCreateManyUserInputEnvelope, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Property_RequestCreateManyUserInputEnvelope_1.Property_RequestCreateManyUserInputEnvelope)
], Property_RequestCreateNestedManyWithoutUserInput.prototype, "createMany", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [Property_RequestWhereUniqueInput_1.Property_RequestWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], Property_RequestCreateNestedManyWithoutUserInput.prototype, "connect", void 0);
Property_RequestCreateNestedManyWithoutUserInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("Property_RequestCreateNestedManyWithoutUserInput", {
        isAbstract: true
    })
], Property_RequestCreateNestedManyWithoutUserInput);
exports.Property_RequestCreateNestedManyWithoutUserInput = Property_RequestCreateNestedManyWithoutUserInput;
