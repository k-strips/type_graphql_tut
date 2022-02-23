"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateOrganization = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const OrganizationCountAggregate_1 = require("../outputs/OrganizationCountAggregate");
const OrganizationMaxAggregate_1 = require("../outputs/OrganizationMaxAggregate");
const OrganizationMinAggregate_1 = require("../outputs/OrganizationMinAggregate");
let AggregateOrganization = class AggregateOrganization {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => OrganizationCountAggregate_1.OrganizationCountAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", OrganizationCountAggregate_1.OrganizationCountAggregate)
], AggregateOrganization.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => OrganizationMinAggregate_1.OrganizationMinAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", OrganizationMinAggregate_1.OrganizationMinAggregate)
], AggregateOrganization.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => OrganizationMaxAggregate_1.OrganizationMaxAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", OrganizationMaxAggregate_1.OrganizationMaxAggregate)
], AggregateOrganization.prototype, "_max", void 0);
AggregateOrganization = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("AggregateOrganization", {
        isAbstract: true
    })
], AggregateOrganization);
exports.AggregateOrganization = AggregateOrganization;
