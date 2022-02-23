"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AddressCountAggregate_1 = require("../outputs/AddressCountAggregate");
const AddressMaxAggregate_1 = require("../outputs/AddressMaxAggregate");
const AddressMinAggregate_1 = require("../outputs/AddressMinAggregate");
let AddressGroupBy = class AddressGroupBy {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AddressGroupBy.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AddressGroupBy.prototype, "email", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AddressGroupBy.prototype, "mobile", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AddressGroupBy.prototype, "work", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AddressGroupBy.prototype, "office", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], AddressGroupBy.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], AddressGroupBy.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AddressGroupBy.prototype, "organizationId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AddressGroupBy.prototype, "userId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AddressCountAggregate_1.AddressCountAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AddressCountAggregate_1.AddressCountAggregate)
], AddressGroupBy.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AddressMinAggregate_1.AddressMinAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AddressMinAggregate_1.AddressMinAggregate)
], AddressGroupBy.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AddressMaxAggregate_1.AddressMaxAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AddressMaxAggregate_1.AddressMaxAggregate)
], AddressGroupBy.prototype, "_max", void 0);
AddressGroupBy = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("AddressGroupBy", {
        isAbstract: true
    })
], AddressGroupBy);
exports.AddressGroupBy = AddressGroupBy;
