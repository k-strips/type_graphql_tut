"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LandSizeUpdateOneWithoutProperty_RequestInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const LandSizeCreateOrConnectWithoutProperty_RequestInput_1 = require("../inputs/LandSizeCreateOrConnectWithoutProperty_RequestInput");
const LandSizeCreateWithoutProperty_RequestInput_1 = require("../inputs/LandSizeCreateWithoutProperty_RequestInput");
const LandSizeUpdateWithoutProperty_RequestInput_1 = require("../inputs/LandSizeUpdateWithoutProperty_RequestInput");
const LandSizeUpsertWithoutProperty_RequestInput_1 = require("../inputs/LandSizeUpsertWithoutProperty_RequestInput");
const LandSizeWhereUniqueInput_1 = require("../inputs/LandSizeWhereUniqueInput");
let LandSizeUpdateOneWithoutProperty_RequestInput = class LandSizeUpdateOneWithoutProperty_RequestInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LandSizeCreateWithoutProperty_RequestInput_1.LandSizeCreateWithoutProperty_RequestInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LandSizeCreateWithoutProperty_RequestInput_1.LandSizeCreateWithoutProperty_RequestInput)
], LandSizeUpdateOneWithoutProperty_RequestInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LandSizeCreateOrConnectWithoutProperty_RequestInput_1.LandSizeCreateOrConnectWithoutProperty_RequestInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LandSizeCreateOrConnectWithoutProperty_RequestInput_1.LandSizeCreateOrConnectWithoutProperty_RequestInput)
], LandSizeUpdateOneWithoutProperty_RequestInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LandSizeUpsertWithoutProperty_RequestInput_1.LandSizeUpsertWithoutProperty_RequestInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LandSizeUpsertWithoutProperty_RequestInput_1.LandSizeUpsertWithoutProperty_RequestInput)
], LandSizeUpdateOneWithoutProperty_RequestInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], LandSizeUpdateOneWithoutProperty_RequestInput.prototype, "disconnect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], LandSizeUpdateOneWithoutProperty_RequestInput.prototype, "delete", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LandSizeWhereUniqueInput_1.LandSizeWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LandSizeWhereUniqueInput_1.LandSizeWhereUniqueInput)
], LandSizeUpdateOneWithoutProperty_RequestInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LandSizeUpdateWithoutProperty_RequestInput_1.LandSizeUpdateWithoutProperty_RequestInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LandSizeUpdateWithoutProperty_RequestInput_1.LandSizeUpdateWithoutProperty_RequestInput)
], LandSizeUpdateOneWithoutProperty_RequestInput.prototype, "update", void 0);
LandSizeUpdateOneWithoutProperty_RequestInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("LandSizeUpdateOneWithoutProperty_RequestInput", {
        isAbstract: true
    })
], LandSizeUpdateOneWithoutProperty_RequestInput);
exports.LandSizeUpdateOneWithoutProperty_RequestInput = LandSizeUpdateOneWithoutProperty_RequestInput;
