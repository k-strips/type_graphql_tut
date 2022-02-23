"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertProperty_RequestArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Property_RequestCreateInput_1 = require("../../../inputs/Property_RequestCreateInput");
const Property_RequestUpdateInput_1 = require("../../../inputs/Property_RequestUpdateInput");
const Property_RequestWhereUniqueInput_1 = require("../../../inputs/Property_RequestWhereUniqueInput");
let UpsertProperty_RequestArgs = class UpsertProperty_RequestArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Property_RequestWhereUniqueInput_1.Property_RequestWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Property_RequestWhereUniqueInput_1.Property_RequestWhereUniqueInput)
], UpsertProperty_RequestArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Property_RequestCreateInput_1.Property_RequestCreateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Property_RequestCreateInput_1.Property_RequestCreateInput)
], UpsertProperty_RequestArgs.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Property_RequestUpdateInput_1.Property_RequestUpdateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Property_RequestUpdateInput_1.Property_RequestUpdateInput)
], UpsertProperty_RequestArgs.prototype, "update", void 0);
UpsertProperty_RequestArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], UpsertProperty_RequestArgs);
exports.UpsertProperty_RequestArgs = UpsertProperty_RequestArgs;
