"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Property_RequestCreateOrConnectWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Property_RequestCreateWithoutUserInput_1 = require("../inputs/Property_RequestCreateWithoutUserInput");
const Property_RequestWhereUniqueInput_1 = require("../inputs/Property_RequestWhereUniqueInput");
let Property_RequestCreateOrConnectWithoutUserInput = class Property_RequestCreateOrConnectWithoutUserInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Property_RequestWhereUniqueInput_1.Property_RequestWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Property_RequestWhereUniqueInput_1.Property_RequestWhereUniqueInput)
], Property_RequestCreateOrConnectWithoutUserInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Property_RequestCreateWithoutUserInput_1.Property_RequestCreateWithoutUserInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Property_RequestCreateWithoutUserInput_1.Property_RequestCreateWithoutUserInput)
], Property_RequestCreateOrConnectWithoutUserInput.prototype, "create", void 0);
Property_RequestCreateOrConnectWithoutUserInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("Property_RequestCreateOrConnectWithoutUserInput", {
        isAbstract: true
    })
], Property_RequestCreateOrConnectWithoutUserInput);
exports.Property_RequestCreateOrConnectWithoutUserInput = Property_RequestCreateOrConnectWithoutUserInput;
