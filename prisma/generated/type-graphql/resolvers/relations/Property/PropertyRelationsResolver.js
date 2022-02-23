"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertyRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Advertisement_1 = require("../../../models/Advertisement");
const LandSize_1 = require("../../../models/LandSize");
const Organization_1 = require("../../../models/Organization");
const Price_1 = require("../../../models/Price");
const Property_1 = require("../../../models/Property");
const Save_1 = require("../../../models/Save");
const User_1 = require("../../../models/User");
const PropertyAdvertisementArgs_1 = require("./args/PropertyAdvertisementArgs");
const PropertyLikesArgs_1 = require("./args/PropertyLikesArgs");
const helpers_1 = require("../../../helpers");
let PropertyRelationsResolver = class PropertyRelationsResolver {
    async size(property, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).property.findUnique({
            where: {
                id: property.id,
            },
        }).size({});
    }
    async price(property, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).property.findUnique({
            where: {
                id: property.id,
            },
        }).price({});
    }
    async likes(property, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).property.findUnique({
            where: {
                id: property.id,
            },
        }).likes(args);
    }
    async owner(property, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).property.findUnique({
            where: {
                id: property.id,
            },
        }).owner({});
    }
    async organization(property, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).property.findUnique({
            where: {
                id: property.id,
            },
        }).organization({});
    }
    async advertisement(property, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).property.findUnique({
            where: {
                id: property.id,
            },
        }).advertisement(args);
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.FieldResolver(_type => LandSize_1.LandSize, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Root()),
    (0, tslib_1.__param)(1, TypeGraphQL.Ctx()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Property_1.Property, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PropertyRelationsResolver.prototype, "size", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.FieldResolver(_type => Price_1.Price, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Root()),
    (0, tslib_1.__param)(1, TypeGraphQL.Ctx()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Property_1.Property, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PropertyRelationsResolver.prototype, "price", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.FieldResolver(_type => [Save_1.Save], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Root()),
    (0, tslib_1.__param)(1, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Property_1.Property, Object, PropertyLikesArgs_1.PropertyLikesArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PropertyRelationsResolver.prototype, "likes", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.FieldResolver(_type => User_1.User, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Root()),
    (0, tslib_1.__param)(1, TypeGraphQL.Ctx()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Property_1.Property, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PropertyRelationsResolver.prototype, "owner", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.FieldResolver(_type => Organization_1.Organization, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Root()),
    (0, tslib_1.__param)(1, TypeGraphQL.Ctx()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Property_1.Property, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PropertyRelationsResolver.prototype, "organization", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.FieldResolver(_type => [Advertisement_1.Advertisement], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Root()),
    (0, tslib_1.__param)(1, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Property_1.Property, Object, PropertyAdvertisementArgs_1.PropertyAdvertisementArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PropertyRelationsResolver.prototype, "advertisement", null);
PropertyRelationsResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Property_1.Property)
], PropertyRelationsResolver);
exports.PropertyRelationsResolver = PropertyRelationsResolver;
