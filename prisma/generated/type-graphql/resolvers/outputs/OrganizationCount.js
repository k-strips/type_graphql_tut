"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let OrganizationCount = class OrganizationCount {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], OrganizationCount.prototype, "members", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], OrganizationCount.prototype, "properties", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], OrganizationCount.prototype, "advertisement", void 0);
OrganizationCount = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("OrganizationCount", {
        isAbstract: true
    })
], OrganizationCount);
exports.OrganizationCount = OrganizationCount;
