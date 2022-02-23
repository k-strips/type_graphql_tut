"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LandSizeRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const LandSize_1 = require("../../../models/LandSize");
const Property_1 = require("../../../models/Property");
const Property_Request_1 = require("../../../models/Property_Request");
const helpers_1 = require("../../../helpers");
let LandSizeRelationsResolver = class LandSizeRelationsResolver {
    async Property(landSize, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).landSize.findUnique({
            where: {
                id: landSize.id,
            },
        }).Property({});
    }
    async Property_Request(landSize, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).landSize.findUnique({
            where: {
                id: landSize.id,
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
    (0, tslib_1.__metadata)("design:paramtypes", [LandSize_1.LandSize, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], LandSizeRelationsResolver.prototype, "Property", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.FieldResolver(_type => Property_Request_1.Property_Request, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Root()),
    (0, tslib_1.__param)(1, TypeGraphQL.Ctx()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [LandSize_1.LandSize, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], LandSizeRelationsResolver.prototype, "Property_Request", null);
LandSizeRelationsResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => LandSize_1.LandSize)
], LandSizeRelationsResolver);
exports.LandSizeRelationsResolver = LandSizeRelationsResolver;
