"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LandSizeCreateNestedOneWithoutPropertyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const LandSizeCreateOrConnectWithoutPropertyInput_1 = require("../inputs/LandSizeCreateOrConnectWithoutPropertyInput");
const LandSizeCreateWithoutPropertyInput_1 = require("../inputs/LandSizeCreateWithoutPropertyInput");
const LandSizeWhereUniqueInput_1 = require("../inputs/LandSizeWhereUniqueInput");
let LandSizeCreateNestedOneWithoutPropertyInput = class LandSizeCreateNestedOneWithoutPropertyInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LandSizeCreateWithoutPropertyInput_1.LandSizeCreateWithoutPropertyInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LandSizeCreateWithoutPropertyInput_1.LandSizeCreateWithoutPropertyInput)
], LandSizeCreateNestedOneWithoutPropertyInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LandSizeCreateOrConnectWithoutPropertyInput_1.LandSizeCreateOrConnectWithoutPropertyInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LandSizeCreateOrConnectWithoutPropertyInput_1.LandSizeCreateOrConnectWithoutPropertyInput)
], LandSizeCreateNestedOneWithoutPropertyInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LandSizeWhereUniqueInput_1.LandSizeWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LandSizeWhereUniqueInput_1.LandSizeWhereUniqueInput)
], LandSizeCreateNestedOneWithoutPropertyInput.prototype, "connect", void 0);
LandSizeCreateNestedOneWithoutPropertyInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("LandSizeCreateNestedOneWithoutPropertyInput", {
        isAbstract: true
    })
], LandSizeCreateNestedOneWithoutPropertyInput);
exports.LandSizeCreateNestedOneWithoutPropertyInput = LandSizeCreateNestedOneWithoutPropertyInput;
