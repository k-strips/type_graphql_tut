"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdvertisementRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Advertisement_1 = require("../../../models/Advertisement");
const Organization_1 = require("../../../models/Organization");
const Price_1 = require("../../../models/Price");
const Property_1 = require("../../../models/Property");
const User_1 = require("../../../models/User");
const helpers_1 = require("../../../helpers");
let AdvertisementRelationsResolver = class AdvertisementRelationsResolver {
    async price(advertisement, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).advertisement.findUnique({
            where: {
                id: advertisement.id,
            },
        }).price({});
    }
    async user(advertisement, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).advertisement.findUnique({
            where: {
                id: advertisement.id,
            },
        }).user({});
    }
    async organization(advertisement, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).advertisement.findUnique({
            where: {
                id: advertisement.id,
            },
        }).organization({});
    }
    async property(advertisement, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).advertisement.findUnique({
            where: {
                id: advertisement.id,
            },
        }).property({});
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.FieldResolver(_type => Price_1.Price, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Root()),
    (0, tslib_1.__param)(1, TypeGraphQL.Ctx()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Advertisement_1.Advertisement, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AdvertisementRelationsResolver.prototype, "price", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.FieldResolver(_type => User_1.User, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Root()),
    (0, tslib_1.__param)(1, TypeGraphQL.Ctx()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Advertisement_1.Advertisement, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AdvertisementRelationsResolver.prototype, "user", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.FieldResolver(_type => Organization_1.Organization, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Root()),
    (0, tslib_1.__param)(1, TypeGraphQL.Ctx()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Advertisement_1.Advertisement, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AdvertisementRelationsResolver.prototype, "organization", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.FieldResolver(_type => Property_1.Property, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Root()),
    (0, tslib_1.__param)(1, TypeGraphQL.Ctx()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Advertisement_1.Advertisement, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AdvertisementRelationsResolver.prototype, "property", null);
AdvertisementRelationsResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Advertisement_1.Advertisement)
], AdvertisementRelationsResolver);
exports.AdvertisementRelationsResolver = AdvertisementRelationsResolver;
