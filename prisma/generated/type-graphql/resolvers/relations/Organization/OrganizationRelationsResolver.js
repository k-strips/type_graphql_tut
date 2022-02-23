"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Address_1 = require("../../../models/Address");
const Advertisement_1 = require("../../../models/Advertisement");
const Organization_1 = require("../../../models/Organization");
const Property_1 = require("../../../models/Property");
const User_1 = require("../../../models/User");
const OrganizationAdvertisementArgs_1 = require("./args/OrganizationAdvertisementArgs");
const OrganizationMembersArgs_1 = require("./args/OrganizationMembersArgs");
const OrganizationPropertiesArgs_1 = require("./args/OrganizationPropertiesArgs");
const helpers_1 = require("../../../helpers");
let OrganizationRelationsResolver = class OrganizationRelationsResolver {
    async address(organization, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).organization.findUnique({
            where: {
                id: organization.id,
            },
        }).address({});
    }
    async members(organization, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).organization.findUnique({
            where: {
                id: organization.id,
            },
        }).members(args);
    }
    async properties(organization, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).organization.findUnique({
            where: {
                id: organization.id,
            },
        }).properties(args);
    }
    async advertisement(organization, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).organization.findUnique({
            where: {
                id: organization.id,
            },
        }).advertisement(args);
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.FieldResolver(_type => Address_1.Address, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Root()),
    (0, tslib_1.__param)(1, TypeGraphQL.Ctx()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Organization_1.Organization, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], OrganizationRelationsResolver.prototype, "address", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.FieldResolver(_type => [User_1.User], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Root()),
    (0, tslib_1.__param)(1, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Organization_1.Organization, Object, OrganizationMembersArgs_1.OrganizationMembersArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], OrganizationRelationsResolver.prototype, "members", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.FieldResolver(_type => [Property_1.Property], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Root()),
    (0, tslib_1.__param)(1, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Organization_1.Organization, Object, OrganizationPropertiesArgs_1.OrganizationPropertiesArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], OrganizationRelationsResolver.prototype, "properties", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.FieldResolver(_type => [Advertisement_1.Advertisement], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Root()),
    (0, tslib_1.__param)(1, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Organization_1.Organization, Object, OrganizationAdvertisementArgs_1.OrganizationAdvertisementArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], OrganizationRelationsResolver.prototype, "advertisement", null);
OrganizationRelationsResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Organization_1.Organization)
], OrganizationRelationsResolver);
exports.OrganizationRelationsResolver = OrganizationRelationsResolver;
