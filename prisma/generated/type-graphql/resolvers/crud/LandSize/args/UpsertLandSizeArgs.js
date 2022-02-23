"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertLandSizeArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const LandSizeCreateInput_1 = require("../../../inputs/LandSizeCreateInput");
const LandSizeUpdateInput_1 = require("../../../inputs/LandSizeUpdateInput");
const LandSizeWhereUniqueInput_1 = require("../../../inputs/LandSizeWhereUniqueInput");
let UpsertLandSizeArgs = class UpsertLandSizeArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LandSizeWhereUniqueInput_1.LandSizeWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", LandSizeWhereUniqueInput_1.LandSizeWhereUniqueInput)
], UpsertLandSizeArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LandSizeCreateInput_1.LandSizeCreateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", LandSizeCreateInput_1.LandSizeCreateInput)
], UpsertLandSizeArgs.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LandSizeUpdateInput_1.LandSizeUpdateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", LandSizeUpdateInput_1.LandSizeUpdateInput)
], UpsertLandSizeArgs.prototype, "update", void 0);
UpsertLandSizeArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], UpsertLandSizeArgs);
exports.UpsertLandSizeArgs = UpsertLandSizeArgs;
