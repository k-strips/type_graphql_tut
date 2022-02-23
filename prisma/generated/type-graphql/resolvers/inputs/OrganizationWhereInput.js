"use strict";
var OrganizationWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AddressRelationFilter_1 = require("../inputs/AddressRelationFilter");
const AdvertisementListRelationFilter_1 = require("../inputs/AdvertisementListRelationFilter");
const BoolFilter_1 = require("../inputs/BoolFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const PropertyListRelationFilter_1 = require("../inputs/PropertyListRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const UserListRelationFilter_1 = require("../inputs/UserListRelationFilter");
let OrganizationWhereInput = OrganizationWhereInput_1 = class OrganizationWhereInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [OrganizationWhereInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], OrganizationWhereInput.prototype, "AND", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [OrganizationWhereInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], OrganizationWhereInput.prototype, "OR", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [OrganizationWhereInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], OrganizationWhereInput.prototype, "NOT", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFilter_1.StringFilter)
], OrganizationWhereInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFilter_1.StringFilter)
], OrganizationWhereInput.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AddressRelationFilter_1.AddressRelationFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AddressRelationFilter_1.AddressRelationFilter)
], OrganizationWhereInput.prototype, "address", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserListRelationFilter_1.UserListRelationFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserListRelationFilter_1.UserListRelationFilter)
], OrganizationWhereInput.prototype, "members", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyListRelationFilter_1.PropertyListRelationFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PropertyListRelationFilter_1.PropertyListRelationFilter)
], OrganizationWhereInput.prototype, "properties", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdvertisementListRelationFilter_1.AdvertisementListRelationFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AdvertisementListRelationFilter_1.AdvertisementListRelationFilter)
], OrganizationWhereInput.prototype, "advertisement", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BoolFilter_1.BoolFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", BoolFilter_1.BoolFilter)
], OrganizationWhereInput.prototype, "isVerified", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BoolFilter_1.BoolFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", BoolFilter_1.BoolFilter)
], OrganizationWhereInput.prototype, "isRegistrated", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BoolFilter_1.BoolFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", BoolFilter_1.BoolFilter)
], OrganizationWhereInput.prototype, "isDeleted", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DateTimeFilter_1.DateTimeFilter)
], OrganizationWhereInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DateTimeFilter_1.DateTimeFilter)
], OrganizationWhereInput.prototype, "updatedAt", void 0);
OrganizationWhereInput = OrganizationWhereInput_1 = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("OrganizationWhereInput", {
        isAbstract: true
    })
], OrganizationWhereInput);
exports.OrganizationWhereInput = OrganizationWhereInput;
