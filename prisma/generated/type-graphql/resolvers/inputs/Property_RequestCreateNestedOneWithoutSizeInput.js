"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Property_RequestCreateNestedOneWithoutSizeInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Property_RequestCreateOrConnectWithoutSizeInput_1 = require("../inputs/Property_RequestCreateOrConnectWithoutSizeInput");
const Property_RequestCreateWithoutSizeInput_1 = require("../inputs/Property_RequestCreateWithoutSizeInput");
const Property_RequestWhereUniqueInput_1 = require("../inputs/Property_RequestWhereUniqueInput");
let Property_RequestCreateNestedOneWithoutSizeInput = class Property_RequestCreateNestedOneWithoutSizeInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Property_RequestCreateWithoutSizeInput_1.Property_RequestCreateWithoutSizeInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Property_RequestCreateWithoutSizeInput_1.Property_RequestCreateWithoutSizeInput)
], Property_RequestCreateNestedOneWithoutSizeInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Property_RequestCreateOrConnectWithoutSizeInput_1.Property_RequestCreateOrConnectWithoutSizeInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Property_RequestCreateOrConnectWithoutSizeInput_1.Property_RequestCreateOrConnectWithoutSizeInput)
], Property_RequestCreateNestedOneWithoutSizeInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Property_RequestWhereUniqueInput_1.Property_RequestWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Property_RequestWhereUniqueInput_1.Property_RequestWhereUniqueInput)
], Property_RequestCreateNestedOneWithoutSizeInput.prototype, "connect", void 0);
Property_RequestCreateNestedOneWithoutSizeInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("Property_RequestCreateNestedOneWithoutSizeInput", {
        isAbstract: true
    })
], Property_RequestCreateNestedOneWithoutSizeInput);
exports.Property_RequestCreateNestedOneWithoutSizeInput = Property_RequestCreateNestedOneWithoutSizeInput;
