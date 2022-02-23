"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueAdvertisementResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const FindUniqueAdvertisementArgs_1 = require("./args/FindUniqueAdvertisementArgs");
const Advertisement_1 = require("../../../models/Advertisement");
const helpers_1 = require("../../../helpers");
let FindUniqueAdvertisementResolver = class FindUniqueAdvertisementResolver {
    async advertisement(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).advertisement.findUnique({
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
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindUniqueAdvertisementArgs_1.FindUniqueAdvertisementArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], FindUniqueAdvertisementResolver.prototype, "advertisement", null);
FindUniqueAdvertisementResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Advertisement_1.Advertisement)
], FindUniqueAdvertisementResolver);
exports.FindUniqueAdvertisementResolver = FindUniqueAdvertisementResolver;
