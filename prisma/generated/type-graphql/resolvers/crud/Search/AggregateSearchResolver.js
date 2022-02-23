"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateSearchResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const AggregateSearchArgs_1 = require("./args/AggregateSearchArgs");
const Search_1 = require("../../../models/Search");
const AggregateSearch_1 = require("../../outputs/AggregateSearch");
const helpers_1 = require("../../../helpers");
let AggregateSearchResolver = class AggregateSearchResolver {
    async aggregateSearch(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).search.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => AggregateSearch_1.AggregateSearch, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, AggregateSearchArgs_1.AggregateSearchArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AggregateSearchResolver.prototype, "aggregateSearch", null);
AggregateSearchResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Search_1.Search)
], AggregateSearchResolver);
exports.AggregateSearchResolver = AggregateSearchResolver;
