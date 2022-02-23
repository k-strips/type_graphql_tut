"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LandSizeCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const AggregateLandSizeArgs_1 = require("./args/AggregateLandSizeArgs");
const CreateLandSizeArgs_1 = require("./args/CreateLandSizeArgs");
const CreateManyLandSizeArgs_1 = require("./args/CreateManyLandSizeArgs");
const DeleteLandSizeArgs_1 = require("./args/DeleteLandSizeArgs");
const DeleteManyLandSizeArgs_1 = require("./args/DeleteManyLandSizeArgs");
const FindFirstLandSizeArgs_1 = require("./args/FindFirstLandSizeArgs");
const FindManyLandSizeArgs_1 = require("./args/FindManyLandSizeArgs");
const FindUniqueLandSizeArgs_1 = require("./args/FindUniqueLandSizeArgs");
const GroupByLandSizeArgs_1 = require("./args/GroupByLandSizeArgs");
const UpdateLandSizeArgs_1 = require("./args/UpdateLandSizeArgs");
const UpdateManyLandSizeArgs_1 = require("./args/UpdateManyLandSizeArgs");
const UpsertLandSizeArgs_1 = require("./args/UpsertLandSizeArgs");
const helpers_1 = require("../../../helpers");
const LandSize_1 = require("../../../models/LandSize");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateLandSize_1 = require("../../outputs/AggregateLandSize");
const LandSizeGroupBy_1 = require("../../outputs/LandSizeGroupBy");
let LandSizeCrudResolver = class LandSizeCrudResolver {
    async landSize(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).landSize.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstLandSize(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).landSize.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async landSizes(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).landSize.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createLandSize(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).landSize.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyLandSize(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).landSize.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteLandSize(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).landSize.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateLandSize(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).landSize.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyLandSize(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).landSize.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyLandSize(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).landSize.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertLandSize(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).landSize.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateLandSize(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).landSize.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByLandSize(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).landSize.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => LandSize_1.LandSize, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindUniqueLandSizeArgs_1.FindUniqueLandSizeArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], LandSizeCrudResolver.prototype, "landSize", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => LandSize_1.LandSize, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindFirstLandSizeArgs_1.FindFirstLandSizeArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], LandSizeCrudResolver.prototype, "findFirstLandSize", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => [LandSize_1.LandSize], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindManyLandSizeArgs_1.FindManyLandSizeArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], LandSizeCrudResolver.prototype, "landSizes", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => LandSize_1.LandSize, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, CreateLandSizeArgs_1.CreateLandSizeArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], LandSizeCrudResolver.prototype, "createLandSize", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, CreateManyLandSizeArgs_1.CreateManyLandSizeArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], LandSizeCrudResolver.prototype, "createManyLandSize", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => LandSize_1.LandSize, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, DeleteLandSizeArgs_1.DeleteLandSizeArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], LandSizeCrudResolver.prototype, "deleteLandSize", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => LandSize_1.LandSize, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpdateLandSizeArgs_1.UpdateLandSizeArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], LandSizeCrudResolver.prototype, "updateLandSize", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, DeleteManyLandSizeArgs_1.DeleteManyLandSizeArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], LandSizeCrudResolver.prototype, "deleteManyLandSize", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpdateManyLandSizeArgs_1.UpdateManyLandSizeArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], LandSizeCrudResolver.prototype, "updateManyLandSize", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => LandSize_1.LandSize, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpsertLandSizeArgs_1.UpsertLandSizeArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], LandSizeCrudResolver.prototype, "upsertLandSize", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => AggregateLandSize_1.AggregateLandSize, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, AggregateLandSizeArgs_1.AggregateLandSizeArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], LandSizeCrudResolver.prototype, "aggregateLandSize", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => [LandSizeGroupBy_1.LandSizeGroupBy], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, GroupByLandSizeArgs_1.GroupByLandSizeArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], LandSizeCrudResolver.prototype, "groupByLandSize", null);
LandSizeCrudResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => LandSize_1.LandSize)
], LandSizeCrudResolver);
exports.LandSizeCrudResolver = LandSizeCrudResolver;
