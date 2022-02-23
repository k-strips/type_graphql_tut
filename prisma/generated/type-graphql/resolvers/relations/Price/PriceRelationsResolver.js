"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Advertisement_1 = require("../../../models/Advertisement");
const Price_1 = require("../../../models/Price");
const Property_1 = require("../../../models/Property");
const Property_Request_1 = require("../../../models/Property_Request");
const helpers_1 = require("../../../helpers");
let PriceRelationsResolver = class PriceRelationsResolver {
    async Property(price, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).price.findUnique({
            where: {
                id: price.id,
            },
        }).Property({});
    }
    async advertisement(price, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).price.findUnique({
            where: {
                id: price.id,
            },
        }).advertisement({});
    }
    async Property_Request(price, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).price.findUnique({
            where: {
                id: price.id,
            },
        }).Property_Request({});
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.FieldResolver(_type => Property_1.Property, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Root()),
    (0, tslib_1.__param)(1, TypeGraphQL.Ctx()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Price_1.Price, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PriceRelationsResolver.prototype, "Property", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.FieldResolver(_type => Advertisement_1.Advertisement, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Root()),
    (0, tslib_1.__param)(1, TypeGraphQL.Ctx()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Price_1.Price, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PriceRelationsResolver.prototype, "advertisement", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.FieldResolver(_type => Property_Request_1.Property_Request, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Root()),
    (0, tslib_1.__param)(1, TypeGraphQL.Ctx()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Price_1.Price, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PriceRelationsResolver.prototype, "Property_Request", null);
PriceRelationsResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Price_1.Price)
], PriceRelationsResolver);
exports.PriceRelationsResolver = PriceRelationsResolver;
