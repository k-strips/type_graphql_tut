"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupBySearchResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const GroupBySearchArgs_1 = require("./args/GroupBySearchArgs");
const Search_1 = require("../../../models/Search");
const SearchGroupBy_1 = require("../../outputs/SearchGroupBy");
const helpers_1 = require("../../../helpers");
let GroupBySearchResolver = class GroupBySearchResolver {
    async groupBySearch(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).search.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => [SearchGroupBy_1.SearchGroupBy], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, GroupBySearchArgs_1.GroupBySearchArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], GroupBySearchResolver.prototype, "groupBySearch", null);
GroupBySearchResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Search_1.Search)
], GroupBySearchResolver);
exports.GroupBySearchResolver = GroupBySearchResolver;
