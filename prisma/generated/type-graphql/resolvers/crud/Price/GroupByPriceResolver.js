"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByPriceResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const GroupByPriceArgs_1 = require("./args/GroupByPriceArgs");
const Price_1 = require("../../../models/Price");
const PriceGroupBy_1 = require("../../outputs/PriceGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByPriceResolver = class GroupByPriceResolver {
    async groupByPrice(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).price.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => [PriceGroupBy_1.PriceGroupBy], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, GroupByPriceArgs_1.GroupByPriceArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], GroupByPriceResolver.prototype, "groupByPrice", null);
GroupByPriceResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Price_1.Price)
], GroupByPriceResolver);
exports.GroupByPriceResolver = GroupByPriceResolver;
