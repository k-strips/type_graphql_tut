"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertSaveArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SaveCreateInput_1 = require("../../../inputs/SaveCreateInput");
const SaveUpdateInput_1 = require("../../../inputs/SaveUpdateInput");
const SaveWhereUniqueInput_1 = require("../../../inputs/SaveWhereUniqueInput");
let UpsertSaveArgs = class UpsertSaveArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SaveWhereUniqueInput_1.SaveWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", SaveWhereUniqueInput_1.SaveWhereUniqueInput)
], UpsertSaveArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SaveCreateInput_1.SaveCreateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", SaveCreateInput_1.SaveCreateInput)
], UpsertSaveArgs.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SaveUpdateInput_1.SaveUpdateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", SaveUpdateInput_1.SaveUpdateInput)
], UpsertSaveArgs.prototype, "update", void 0);
UpsertSaveArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], UpsertSaveArgs);
exports.UpsertSaveArgs = UpsertSaveArgs;
