"use strict";
var NestedEnumUserStatusFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumUserStatusFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const UserStatus_1 = require("../../enums/UserStatus");
let NestedEnumUserStatusFilter = NestedEnumUserStatusFilter_1 = class NestedEnumUserStatusFilter {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserStatus_1.UserStatus, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], NestedEnumUserStatusFilter.prototype, "equals", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [UserStatus_1.UserStatus], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], NestedEnumUserStatusFilter.prototype, "in", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [UserStatus_1.UserStatus], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], NestedEnumUserStatusFilter.prototype, "notIn", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumUserStatusFilter_1, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumUserStatusFilter)
], NestedEnumUserStatusFilter.prototype, "not", void 0);
NestedEnumUserStatusFilter = NestedEnumUserStatusFilter_1 = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("NestedEnumUserStatusFilter", {
        isAbstract: true
    })
], NestedEnumUserStatusFilter);
exports.NestedEnumUserStatusFilter = NestedEnumUserStatusFilter;
