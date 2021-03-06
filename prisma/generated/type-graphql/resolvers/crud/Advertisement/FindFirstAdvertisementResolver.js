"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstAdvertisementResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const FindFirstAdvertisementArgs_1 = require("./args/FindFirstAdvertisementArgs");
const Advertisement_1 = require("../../../models/Advertisement");
const helpers_1 = require("../../../helpers");
let FindFirstAdvertisementResolver = class FindFirstAdvertisementResolver {
    async findFirstAdvertisement(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).advertisement.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => Advertisement_1.Advertisement, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindFirstAdvertisementArgs_1.FindFirstAdvertisementArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], FindFirstAdvertisementResolver.prototype, "findFirstAdvertisement", null);
FindFirstAdvertisementResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Advertisement_1.Advertisement)
], FindFirstAdvertisementResolver);
exports.FindFirstAdvertisementResolver = FindFirstAdvertisementResolver;
