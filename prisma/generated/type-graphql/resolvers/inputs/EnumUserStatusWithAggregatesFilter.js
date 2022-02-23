"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumUserStatusWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const NestedEnumUserStatusFilter_1 = require("../inputs/NestedEnumUserStatusFilter");
const NestedEnumUserStatusWithAggregatesFilter_1 = require("../inputs/NestedEnumUserStatusWithAggregatesFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const UserStatus_1 = require("../../enums/UserStatus");
let EnumUserStatusWithAggregatesFilter = class EnumUserStatusWithAggregatesFilter {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserStatus_1.UserStatus, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], EnumUserStatusWithAggregatesFilter.prototype, "equals", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [UserStatus_1.UserStatus], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], EnumUserStatusWithAggregatesFilter.prototype, "in", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [UserStatus_1.UserStatus], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], EnumUserStatusWithAggregatesFilter.prototype, "notIn", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumUserStatusWithAggregatesFilter_1.NestedEnumUserStatusWithAggregatesFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumUserStatusWithAggregatesFilter_1.NestedEnumUserStatusWithAggregatesFilter)
], EnumUserStatusWithAggregatesFilter.prototype, "not", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedIntFilter_1.NestedIntFilter)
], EnumUserStatusWithAggregatesFilter.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumUserStatusFilter_1.NestedEnumUserStatusFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumUserStatusFilter_1.NestedEnumUserStatusFilter)
], EnumUserStatusWithAggregatesFilter.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumUserStatusFilter_1.NestedEnumUserStatusFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumUserStatusFilter_1.NestedEnumUserStatusFilter)
], EnumUserStatusWithAggregatesFilter.prototype, "_max", void 0);
EnumUserStatusWithAggregatesFilter = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("EnumUserStatusWithAggregatesFilter", {
        isAbstract: true
    })
], EnumUserStatusWithAggregatesFilter);
exports.EnumUserStatusWithAggregatesFilter = EnumUserStatusWithAggregatesFilter;
