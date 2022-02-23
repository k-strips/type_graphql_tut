"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertyCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const AggregatePropertyArgs_1 = require("./args/AggregatePropertyArgs");
const CreateManyPropertyArgs_1 = require("./args/CreateManyPropertyArgs");
const CreatePropertyArgs_1 = require("./args/CreatePropertyArgs");
const DeleteManyPropertyArgs_1 = require("./args/DeleteManyPropertyArgs");
const DeletePropertyArgs_1 = require("./args/DeletePropertyArgs");
const FindFirstPropertyArgs_1 = require("./args/FindFirstPropertyArgs");
const FindManyPropertyArgs_1 = require("./args/FindManyPropertyArgs");
const FindUniquePropertyArgs_1 = require("./args/FindUniquePropertyArgs");
const GroupByPropertyArgs_1 = require("./args/GroupByPropertyArgs");
const UpdateManyPropertyArgs_1 = require("./args/UpdateManyPropertyArgs");
const UpdatePropertyArgs_1 = require("./args/UpdatePropertyArgs");
const UpsertPropertyArgs_1 = require("./args/UpsertPropertyArgs");
const helpers_1 = require("../../../helpers");
const Property_1 = require("../../../models/Property");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateProperty_1 = require("../../outputs/AggregateProperty");
const PropertyGroupBy_1 = require("../../outputs/PropertyGroupBy");
let PropertyCrudResolver = class PropertyCrudResolver {
    async property(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).property.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstProperty(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).property.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async properties(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).property.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createProperty(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).property.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyProperty(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).property.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteProperty(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).property.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateProperty(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).property.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyProperty(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).property.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyProperty(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).property.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertProperty(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).property.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateProperty(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).property.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByProperty(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).property.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => Property_1.Property, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindUniquePropertyArgs_1.FindUniquePropertyArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PropertyCrudResolver.prototype, "property", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => Property_1.Property, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindFirstPropertyArgs_1.FindFirstPropertyArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PropertyCrudResolver.prototype, "findFirstProperty", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => [Property_1.Property], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindManyPropertyArgs_1.FindManyPropertyArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PropertyCrudResolver.prototype, "properties", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Property_1.Property, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, CreatePropertyArgs_1.CreatePropertyArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PropertyCrudResolver.prototype, "createProperty", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, CreateManyPropertyArgs_1.CreateManyPropertyArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PropertyCrudResolver.prototype, "createManyProperty", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Property_1.Property, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, DeletePropertyArgs_1.DeletePropertyArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PropertyCrudResolver.prototype, "deleteProperty", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Property_1.Property, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpdatePropertyArgs_1.UpdatePropertyArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PropertyCrudResolver.prototype, "updateProperty", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, DeleteManyPropertyArgs_1.DeleteManyPropertyArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PropertyCrudResolver.prototype, "deleteManyProperty", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpdateManyPropertyArgs_1.UpdateManyPropertyArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PropertyCrudResolver.prototype, "updateManyProperty", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Property_1.Property, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpsertPropertyArgs_1.UpsertPropertyArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PropertyCrudResolver.prototype, "upsertProperty", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => AggregateProperty_1.AggregateProperty, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, AggregatePropertyArgs_1.AggregatePropertyArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PropertyCrudResolver.prototype, "aggregateProperty", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => [PropertyGroupBy_1.PropertyGroupBy], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, GroupByPropertyArgs_1.GroupByPropertyArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PropertyCrudResolver.prototype, "groupByProperty", null);
PropertyCrudResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Property_1.Property)
], PropertyCrudResolver);
exports.PropertyCrudResolver = PropertyCrudResolver;
