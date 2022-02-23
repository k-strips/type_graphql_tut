"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LandSizeCreateNestedOneWithoutProperty_RequestInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const LandSizeCreateOrConnectWithoutProperty_RequestInput_1 = require("../inputs/LandSizeCreateOrConnectWithoutProperty_RequestInput");
const LandSizeCreateWithoutProperty_RequestInput_1 = require("../inputs/LandSizeCreateWithoutProperty_RequestInput");
const LandSizeWhereUniqueInput_1 = require("../inputs/LandSizeWhereUniqueInput");
let LandSizeCreateNestedOneWithoutProperty_RequestInput = class LandSizeCreateNestedOneWithoutProperty_RequestInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LandSizeCreateWithoutProperty_RequestInput_1.LandSizeCreateWithoutProperty_RequestInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LandSizeCreateWithoutProperty_RequestInput_1.LandSizeCreateWithoutProperty_RequestInput)
], LandSizeCreateNestedOneWithoutProperty_RequestInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LandSizeCreateOrConnectWithoutProperty_RequestInput_1.LandSizeCreateOrConnectWithoutProperty_RequestInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LandSizeCreateOrConnectWithoutProperty_RequestInput_1.LandSizeCreateOrConnectWithoutProperty_RequestInput)
], LandSizeCreateNestedOneWithoutProperty_RequestInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LandSizeWhereUniqueInput_1.LandSizeWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LandSizeWhereUniqueInput_1.LandSizeWhereUniqueInput)
], LandSizeCreateNestedOneWithoutProperty_RequestInput.prototype, "connect", void 0);
LandSizeCreateNestedOneWithoutProperty_RequestInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("LandSizeCreateNestedOneWithoutProperty_RequestInput", {
        isAbstract: true
    })
], LandSizeCreateNestedOneWithoutProperty_RequestInput);
exports.LandSizeCreateNestedOneWithoutProperty_RequestInput = LandSizeCreateNestedOneWithoutProperty_RequestInput;
