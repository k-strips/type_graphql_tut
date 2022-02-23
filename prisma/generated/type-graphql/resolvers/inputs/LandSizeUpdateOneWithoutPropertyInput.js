"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LandSizeUpdateOneWithoutPropertyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const LandSizeCreateOrConnectWithoutPropertyInput_1 = require("../inputs/LandSizeCreateOrConnectWithoutPropertyInput");
const LandSizeCreateWithoutPropertyInput_1 = require("../inputs/LandSizeCreateWithoutPropertyInput");
const LandSizeUpdateWithoutPropertyInput_1 = require("../inputs/LandSizeUpdateWithoutPropertyInput");
const LandSizeUpsertWithoutPropertyInput_1 = require("../inputs/LandSizeUpsertWithoutPropertyInput");
const LandSizeWhereUniqueInput_1 = require("../inputs/LandSizeWhereUniqueInput");
let LandSizeUpdateOneWithoutPropertyInput = class LandSizeUpdateOneWithoutPropertyInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LandSizeCreateWithoutPropertyInput_1.LandSizeCreateWithoutPropertyInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LandSizeCreateWithoutPropertyInput_1.LandSizeCreateWithoutPropertyInput)
], LandSizeUpdateOneWithoutPropertyInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LandSizeCreateOrConnectWithoutPropertyInput_1.LandSizeCreateOrConnectWithoutPropertyInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LandSizeCreateOrConnectWithoutPropertyInput_1.LandSizeCreateOrConnectWithoutPropertyInput)
], LandSizeUpdateOneWithoutPropertyInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LandSizeUpsertWithoutPropertyInput_1.LandSizeUpsertWithoutPropertyInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LandSizeUpsertWithoutPropertyInput_1.LandSizeUpsertWithoutPropertyInput)
], LandSizeUpdateOneWithoutPropertyInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], LandSizeUpdateOneWithoutPropertyInput.prototype, "disconnect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], LandSizeUpdateOneWithoutPropertyInput.prototype, "delete", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LandSizeWhereUniqueInput_1.LandSizeWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LandSizeWhereUniqueInput_1.LandSizeWhereUniqueInput)
], LandSizeUpdateOneWithoutPropertyInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LandSizeUpdateWithoutPropertyInput_1.LandSizeUpdateWithoutPropertyInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LandSizeUpdateWithoutPropertyInput_1.LandSizeUpdateWithoutPropertyInput)
], LandSizeUpdateOneWithoutPropertyInput.prototype, "update", void 0);
LandSizeUpdateOneWithoutPropertyInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("LandSizeUpdateOneWithoutPropertyInput", {
        isAbstract: true
    })
], LandSizeUpdateOneWithoutPropertyInput);
exports.LandSizeUpdateOneWithoutPropertyInput = LandSizeUpdateOneWithoutPropertyInput;
