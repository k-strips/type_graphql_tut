"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Property_RequestCreateOrConnectWithoutSizeInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Property_RequestCreateWithoutSizeInput_1 = require("../inputs/Property_RequestCreateWithoutSizeInput");
const Property_RequestWhereUniqueInput_1 = require("../inputs/Property_RequestWhereUniqueInput");
let Property_RequestCreateOrConnectWithoutSizeInput = class Property_RequestCreateOrConnectWithoutSizeInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Property_RequestWhereUniqueInput_1.Property_RequestWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Property_RequestWhereUniqueInput_1.Property_RequestWhereUniqueInput)
], Property_RequestCreateOrConnectWithoutSizeInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Property_RequestCreateWithoutSizeInput_1.Property_RequestCreateWithoutSizeInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Property_RequestCreateWithoutSizeInput_1.Property_RequestCreateWithoutSizeInput)
], Property_RequestCreateOrConnectWithoutSizeInput.prototype, "create", void 0);
Property_RequestCreateOrConnectWithoutSizeInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("Property_RequestCreateOrConnectWithoutSizeInput", {
        isAbstract: true
    })
], Property_RequestCreateOrConnectWithoutSizeInput);
exports.Property_RequestCreateOrConnectWithoutSizeInput = Property_RequestCreateOrConnectWithoutSizeInput;
