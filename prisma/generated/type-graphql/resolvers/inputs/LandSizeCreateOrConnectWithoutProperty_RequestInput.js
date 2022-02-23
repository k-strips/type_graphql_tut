"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LandSizeCreateOrConnectWithoutProperty_RequestInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const LandSizeCreateWithoutProperty_RequestInput_1 = require("../inputs/LandSizeCreateWithoutProperty_RequestInput");
const LandSizeWhereUniqueInput_1 = require("../inputs/LandSizeWhereUniqueInput");
let LandSizeCreateOrConnectWithoutProperty_RequestInput = class LandSizeCreateOrConnectWithoutProperty_RequestInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LandSizeWhereUniqueInput_1.LandSizeWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", LandSizeWhereUniqueInput_1.LandSizeWhereUniqueInput)
], LandSizeCreateOrConnectWithoutProperty_RequestInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LandSizeCreateWithoutProperty_RequestInput_1.LandSizeCreateWithoutProperty_RequestInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", LandSizeCreateWithoutProperty_RequestInput_1.LandSizeCreateWithoutProperty_RequestInput)
], LandSizeCreateOrConnectWithoutProperty_RequestInput.prototype, "create", void 0);
LandSizeCreateOrConnectWithoutProperty_RequestInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("LandSizeCreateOrConnectWithoutProperty_RequestInput", {
        isAbstract: true
    })
], LandSizeCreateOrConnectWithoutProperty_RequestInput);
exports.LandSizeCreateOrConnectWithoutProperty_RequestInput = LandSizeCreateOrConnectWithoutProperty_RequestInput;
