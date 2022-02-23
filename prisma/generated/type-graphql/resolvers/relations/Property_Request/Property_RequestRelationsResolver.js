"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Property_RequestRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const LandSize_1 = require("../../../models/LandSize");
const Price_1 = require("../../../models/Price");
const Property_Request_1 = require("../../../models/Property_Request");
const User_1 = require("../../../models/User");
const Property_RequestPriceRangeArgs_1 = require("./args/Property_RequestPriceRangeArgs");
const helpers_1 = require("../../../helpers");
let Property_RequestRelationsResolver = class Property_RequestRelationsResolver {
    async priceRange(property_Request, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).property_Request.findUnique({
            where: {
                id: property_Request.id,
            },
        }).priceRange(args);
    }
    async size(property_Request, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).property_Request.findUnique({
            where: {
                id: property_Request.id,
            },
        }).size({});
    }
    async user(property_Request, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).property_Request.findUnique({
            where: {
                id: property_Request.id,
            },
        }).user({});
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.FieldResolver(_type => [Price_1.Price], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Root()),
    (0, tslib_1.__param)(1, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Property_Request_1.Property_Request, Object, Property_RequestPriceRangeArgs_1.Property_RequestPriceRangeArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], Property_RequestRelationsResolver.prototype, "priceRange", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.FieldResolver(_type => LandSize_1.LandSize, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Root()),
    (0, tslib_1.__param)(1, TypeGraphQL.Ctx()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Property_Request_1.Property_Request, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], Property_RequestRelationsResolver.prototype, "size", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.FieldResolver(_type => User_1.User, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Root()),
    (0, tslib_1.__param)(1, TypeGraphQL.Ctx()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Property_Request_1.Property_Request, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], Property_RequestRelationsResolver.prototype, "user", null);
Property_RequestRelationsResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Property_Request_1.Property_Request)
], Property_RequestRelationsResolver);
exports.Property_RequestRelationsResolver = Property_RequestRelationsResolver;
