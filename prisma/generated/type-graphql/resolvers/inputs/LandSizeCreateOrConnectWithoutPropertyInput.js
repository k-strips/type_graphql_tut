"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LandSizeCreateOrConnectWithoutPropertyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const LandSizeCreateWithoutPropertyInput_1 = require("../inputs/LandSizeCreateWithoutPropertyInput");
const LandSizeWhereUniqueInput_1 = require("../inputs/LandSizeWhereUniqueInput");
let LandSizeCreateOrConnectWithoutPropertyInput = class LandSizeCreateOrConnectWithoutPropertyInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LandSizeWhereUniqueInput_1.LandSizeWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", LandSizeWhereUniqueInput_1.LandSizeWhereUniqueInput)
], LandSizeCreateOrConnectWithoutPropertyInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LandSizeCreateWithoutPropertyInput_1.LandSizeCreateWithoutPropertyInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", LandSizeCreateWithoutPropertyInput_1.LandSizeCreateWithoutPropertyInput)
], LandSizeCreateOrConnectWithoutPropertyInput.prototype, "create", void 0);
LandSizeCreateOrConnectWithoutPropertyInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("LandSizeCreateOrConnectWithoutPropertyInput", {
        isAbstract: true
    })
], LandSizeCreateOrConnectWithoutPropertyInput);
exports.LandSizeCreateOrConnectWithoutPropertyInput = LandSizeCreateOrConnectWithoutPropertyInput;
