"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdvertisementCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const AggregateAdvertisementArgs_1 = require("./args/AggregateAdvertisementArgs");
const CreateAdvertisementArgs_1 = require("./args/CreateAdvertisementArgs");
const CreateManyAdvertisementArgs_1 = require("./args/CreateManyAdvertisementArgs");
const DeleteAdvertisementArgs_1 = require("./args/DeleteAdvertisementArgs");
const DeleteManyAdvertisementArgs_1 = require("./args/DeleteManyAdvertisementArgs");
const FindFirstAdvertisementArgs_1 = require("./args/FindFirstAdvertisementArgs");
const FindManyAdvertisementArgs_1 = require("./args/FindManyAdvertisementArgs");
const FindUniqueAdvertisementArgs_1 = require("./args/FindUniqueAdvertisementArgs");
const GroupByAdvertisementArgs_1 = require("./args/GroupByAdvertisementArgs");
const UpdateAdvertisementArgs_1 = require("./args/UpdateAdvertisementArgs");
const UpdateManyAdvertisementArgs_1 = require("./args/UpdateManyAdvertisementArgs");
const UpsertAdvertisementArgs_1 = require("./args/UpsertAdvertisementArgs");
const helpers_1 = require("../../../helpers");
const Advertisement_1 = require("../../../models/Advertisement");
const AdvertisementGroupBy_1 = require("../../outputs/AdvertisementGroupBy");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateAdvertisement_1 = require("../../outputs/AggregateAdvertisement");
let AdvertisementCrudResolver = class AdvertisementCrudResolver {
    async advertisement(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).advertisement.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstAdvertisement(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).advertisement.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async advertisements(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).advertisement.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createAdvertisement(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).advertisement.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyAdvertisement(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).advertisement.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteAdvertisement(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).advertisement.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateAdvertisement(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).advertisement.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyAdvertisement(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).advertisement.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyAdvertisement(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).advertisement.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertAdvertisement(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).advertisement.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateAdvertisement(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).advertisement.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByAdvertisement(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).advertisement.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
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
], AdvertisementCrudResolver.prototype, "advertisement", null);
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
], AdvertisementCrudResolver.prototype, "findFirstAdvertisement", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => [Advertisement_1.Advertisement], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindManyAdvertisementArgs_1.FindManyAdvertisementArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AdvertisementCrudResolver.prototype, "advertisements", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Advertisement_1.Advertisement, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, CreateAdvertisementArgs_1.CreateAdvertisementArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AdvertisementCrudResolver.prototype, "createAdvertisement", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, CreateManyAdvertisementArgs_1.CreateManyAdvertisementArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AdvertisementCrudResolver.prototype, "createManyAdvertisement", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Advertisement_1.Advertisement, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, DeleteAdvertisementArgs_1.DeleteAdvertisementArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AdvertisementCrudResolver.prototype, "deleteAdvertisement", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Advertisement_1.Advertisement, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpdateAdvertisementArgs_1.UpdateAdvertisementArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AdvertisementCrudResolver.prototype, "updateAdvertisement", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, DeleteManyAdvertisementArgs_1.DeleteManyAdvertisementArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AdvertisementCrudResolver.prototype, "deleteManyAdvertisement", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpdateManyAdvertisementArgs_1.UpdateManyAdvertisementArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AdvertisementCrudResolver.prototype, "updateManyAdvertisement", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Advertisement_1.Advertisement, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpsertAdvertisementArgs_1.UpsertAdvertisementArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AdvertisementCrudResolver.prototype, "upsertAdvertisement", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => AggregateAdvertisement_1.AggregateAdvertisement, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, AggregateAdvertisementArgs_1.AggregateAdvertisementArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AdvertisementCrudResolver.prototype, "aggregateAdvertisement", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => [AdvertisementGroupBy_1.AdvertisementGroupBy], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, GroupByAdvertisementArgs_1.GroupByAdvertisementArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AdvertisementCrudResolver.prototype, "groupByAdvertisement", null);
AdvertisementCrudResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Advertisement_1.Advertisement)
], AdvertisementCrudResolver);
exports.AdvertisementCrudResolver = AdvertisementCrudResolver;
