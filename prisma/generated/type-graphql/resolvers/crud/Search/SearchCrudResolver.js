"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const AggregateSearchArgs_1 = require("./args/AggregateSearchArgs");
const CreateManySearchArgs_1 = require("./args/CreateManySearchArgs");
const CreateSearchArgs_1 = require("./args/CreateSearchArgs");
const DeleteManySearchArgs_1 = require("./args/DeleteManySearchArgs");
const DeleteSearchArgs_1 = require("./args/DeleteSearchArgs");
const FindFirstSearchArgs_1 = require("./args/FindFirstSearchArgs");
const FindManySearchArgs_1 = require("./args/FindManySearchArgs");
const FindUniqueSearchArgs_1 = require("./args/FindUniqueSearchArgs");
const GroupBySearchArgs_1 = require("./args/GroupBySearchArgs");
const UpdateManySearchArgs_1 = require("./args/UpdateManySearchArgs");
const UpdateSearchArgs_1 = require("./args/UpdateSearchArgs");
const UpsertSearchArgs_1 = require("./args/UpsertSearchArgs");
const helpers_1 = require("../../../helpers");
const Search_1 = require("../../../models/Search");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateSearch_1 = require("../../outputs/AggregateSearch");
const SearchGroupBy_1 = require("../../outputs/SearchGroupBy");
let SearchCrudResolver = class SearchCrudResolver {
    async search(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).search.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstSearch(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).search.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async searches(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).search.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createSearch(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).search.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManySearch(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).search.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteSearch(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).search.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateSearch(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).search.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManySearch(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).search.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManySearch(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).search.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertSearch(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).search.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateSearch(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).search.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupBySearch(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).search.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => Search_1.Search, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindUniqueSearchArgs_1.FindUniqueSearchArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SearchCrudResolver.prototype, "search", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => Search_1.Search, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindFirstSearchArgs_1.FindFirstSearchArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SearchCrudResolver.prototype, "findFirstSearch", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => [Search_1.Search], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindManySearchArgs_1.FindManySearchArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SearchCrudResolver.prototype, "searches", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Search_1.Search, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, CreateSearchArgs_1.CreateSearchArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SearchCrudResolver.prototype, "createSearch", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, CreateManySearchArgs_1.CreateManySearchArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SearchCrudResolver.prototype, "createManySearch", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Search_1.Search, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, DeleteSearchArgs_1.DeleteSearchArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SearchCrudResolver.prototype, "deleteSearch", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Search_1.Search, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpdateSearchArgs_1.UpdateSearchArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SearchCrudResolver.prototype, "updateSearch", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, DeleteManySearchArgs_1.DeleteManySearchArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SearchCrudResolver.prototype, "deleteManySearch", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpdateManySearchArgs_1.UpdateManySearchArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SearchCrudResolver.prototype, "updateManySearch", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Search_1.Search, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpsertSearchArgs_1.UpsertSearchArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SearchCrudResolver.prototype, "upsertSearch", null);
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
], SearchCrudResolver.prototype, "aggregateSearch", null);
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
], SearchCrudResolver.prototype, "groupBySearch", null);
SearchCrudResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Search_1.Search)
], SearchCrudResolver);
exports.SearchCrudResolver = SearchCrudResolver;
