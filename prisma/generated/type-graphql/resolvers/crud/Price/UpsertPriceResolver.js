"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertPriceResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const UpsertPriceArgs_1 = require("./args/UpsertPriceArgs");
const Price_1 = require("../../../models/Price");
const helpers_1 = require("../../../helpers");
let UpsertPriceResolver = class UpsertPriceResolver {
    async upsertPrice(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).price.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Price_1.Price, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpsertPriceArgs_1.UpsertPriceArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UpsertPriceResolver.prototype, "upsertPrice", null);
UpsertPriceResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Price_1.Price)
], UpsertPriceResolver);
exports.UpsertPriceResolver = UpsertPriceResolver;
