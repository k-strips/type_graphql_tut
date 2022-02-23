"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const OrganizationCountAggregate_1 = require("../outputs/OrganizationCountAggregate");
const OrganizationMaxAggregate_1 = require("../outputs/OrganizationMaxAggregate");
const OrganizationMinAggregate_1 = require("../outputs/OrganizationMinAggregate");
let OrganizationGroupBy = class OrganizationGroupBy {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrganizationGroupBy.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrganizationGroupBy.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], OrganizationGroupBy.prototype, "isVerified", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], OrganizationGroupBy.prototype, "isRegistrated", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], OrganizationGroupBy.prototype, "isDeleted", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], OrganizationGroupBy.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], OrganizationGroupBy.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => OrganizationCountAggregate_1.OrganizationCountAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", OrganizationCountAggregate_1.OrganizationCountAggregate)
], OrganizationGroupBy.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => OrganizationMinAggregate_1.OrganizationMinAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", OrganizationMinAggregate_1.OrganizationMinAggregate)
], OrganizationGroupBy.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => OrganizationMaxAggregate_1.OrganizationMaxAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", OrganizationMaxAggregate_1.OrganizationMaxAggregate)
], OrganizationGroupBy.prototype, "_max", void 0);
OrganizationGroupBy = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("OrganizationGroupBy", {
        isAbstract: true
    })
], OrganizationGroupBy);
exports.OrganizationGroupBy = OrganizationGroupBy;
