"use strict";
var NestedEnumUserStatusWithAggregatesFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumUserStatusWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const NestedEnumUserStatusFilter_1 = require("../inputs/NestedEnumUserStatusFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const UserStatus_1 = require("../../enums/UserStatus");
let NestedEnumUserStatusWithAggregatesFilter = NestedEnumUserStatusWithAggregatesFilter_1 = class NestedEnumUserStatusWithAggregatesFilter {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserStatus_1.UserStatus, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], NestedEnumUserStatusWithAggregatesFilter.prototype, "equals", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [UserStatus_1.UserStatus], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], NestedEnumUserStatusWithAggregatesFilter.prototype, "in", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [UserStatus_1.UserStatus], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], NestedEnumUserStatusWithAggregatesFilter.prototype, "notIn", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumUserStatusWithAggregatesFilter_1, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumUserStatusWithAggregatesFilter)
], NestedEnumUserStatusWithAggregatesFilter.prototype, "not", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedIntFilter_1.NestedIntFilter)
], NestedEnumUserStatusWithAggregatesFilter.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumUserStatusFilter_1.NestedEnumUserStatusFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumUserStatusFilter_1.NestedEnumUserStatusFilter)
], NestedEnumUserStatusWithAggregatesFilter.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumUserStatusFilter_1.NestedEnumUserStatusFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumUserStatusFilter_1.NestedEnumUserStatusFilter)
], NestedEnumUserStatusWithAggregatesFilter.prototype, "_max", void 0);
NestedEnumUserStatusWithAggregatesFilter = NestedEnumUserStatusWithAggregatesFilter_1 = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("NestedEnumUserStatusWithAggregatesFilter", {
        isAbstract: true
    })
], NestedEnumUserStatusWithAggregatesFilter);
exports.NestedEnumUserStatusWithAggregatesFilter = NestedEnumUserStatusWithAggregatesFilter;
