"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumUserStatusFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const NestedEnumUserStatusFilter_1 = require("../inputs/NestedEnumUserStatusFilter");
const UserStatus_1 = require("../../enums/UserStatus");
let EnumUserStatusFilter = class EnumUserStatusFilter {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserStatus_1.UserStatus, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], EnumUserStatusFilter.prototype, "equals", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [UserStatus_1.UserStatus], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], EnumUserStatusFilter.prototype, "in", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [UserStatus_1.UserStatus], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], EnumUserStatusFilter.prototype, "notIn", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumUserStatusFilter_1.NestedEnumUserStatusFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumUserStatusFilter_1.NestedEnumUserStatusFilter)
], EnumUserStatusFilter.prototype, "not", void 0);
EnumUserStatusFilter = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("EnumUserStatusFilter", {
        isAbstract: true
    })
], EnumUserStatusFilter);
exports.EnumUserStatusFilter = EnumUserStatusFilter;
