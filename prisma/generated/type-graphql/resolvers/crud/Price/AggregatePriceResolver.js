"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregatePriceResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const AggregatePriceArgs_1 = require("./args/AggregatePriceArgs");
const Price_1 = require("../../../models/Price");
const AggregatePrice_1 = require("../../outputs/AggregatePrice");
const helpers_1 = require("../../../helpers");
let AggregatePriceResolver = class AggregatePriceResolver {
    async aggregatePrice(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).price.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => AggregatePrice_1.AggregatePrice, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, AggregatePriceArgs_1.AggregatePriceArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AggregatePriceResolver.prototype, "aggregatePrice", null);
AggregatePriceResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Price_1.Price)
], AggregatePriceResolver);
exports.AggregatePriceResolver = AggregatePriceResolver;
