"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Property_RequestCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const AggregateProperty_RequestArgs_1 = require("./args/AggregateProperty_RequestArgs");
const CreateManyProperty_RequestArgs_1 = require("./args/CreateManyProperty_RequestArgs");
const CreateProperty_RequestArgs_1 = require("./args/CreateProperty_RequestArgs");
const DeleteManyProperty_RequestArgs_1 = require("./args/DeleteManyProperty_RequestArgs");
const DeleteProperty_RequestArgs_1 = require("./args/DeleteProperty_RequestArgs");
const FindFirstProperty_RequestArgs_1 = require("./args/FindFirstProperty_RequestArgs");
const FindManyProperty_RequestArgs_1 = require("./args/FindManyProperty_RequestArgs");
const FindUniqueProperty_RequestArgs_1 = require("./args/FindUniqueProperty_RequestArgs");
const GroupByProperty_RequestArgs_1 = require("./args/GroupByProperty_RequestArgs");
const UpdateManyProperty_RequestArgs_1 = require("./args/UpdateManyProperty_RequestArgs");
const UpdateProperty_RequestArgs_1 = require("./args/UpdateProperty_RequestArgs");
const UpsertProperty_RequestArgs_1 = require("./args/UpsertProperty_RequestArgs");
const helpers_1 = require("../../../helpers");
const Property_Request_1 = require("../../../models/Property_Request");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateProperty_Request_1 = require("../../outputs/AggregateProperty_Request");
const Property_RequestGroupBy_1 = require("../../outputs/Property_RequestGroupBy");
let Property_RequestCrudResolver = class Property_RequestCrudResolver {
    async property_Request(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).property_Request.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstProperty_Request(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).property_Request.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async property_Requests(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).property_Request.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createProperty_Request(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).property_Request.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyProperty_Request(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).property_Request.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteProperty_Request(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).property_Request.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateProperty_Request(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).property_Request.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyProperty_Request(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).property_Request.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyProperty_Request(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).property_Request.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertProperty_Request(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).property_Request.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateProperty_Request(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).property_Request.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByProperty_Request(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).property_Request.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => Property_Request_1.Property_Request, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindUniqueProperty_RequestArgs_1.FindUniqueProperty_RequestArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], Property_RequestCrudResolver.prototype, "property_Request", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => Property_Request_1.Property_Request, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindFirstProperty_RequestArgs_1.FindFirstProperty_RequestArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], Property_RequestCrudResolver.prototype, "findFirstProperty_Request", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => [Property_Request_1.Property_Request], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindManyProperty_RequestArgs_1.FindManyProperty_RequestArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], Property_RequestCrudResolver.prototype, "property_Requests", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Property_Request_1.Property_Request, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, CreateProperty_RequestArgs_1.CreateProperty_RequestArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], Property_RequestCrudResolver.prototype, "createProperty_Request", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, CreateManyProperty_RequestArgs_1.CreateManyProperty_RequestArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], Property_RequestCrudResolver.prototype, "createManyProperty_Request", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Property_Request_1.Property_Request, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, DeleteProperty_RequestArgs_1.DeleteProperty_RequestArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], Property_RequestCrudResolver.prototype, "deleteProperty_Request", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Property_Request_1.Property_Request, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpdateProperty_RequestArgs_1.UpdateProperty_RequestArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], Property_RequestCrudResolver.prototype, "updateProperty_Request", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, DeleteManyProperty_RequestArgs_1.DeleteManyProperty_RequestArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], Property_RequestCrudResolver.prototype, "deleteManyProperty_Request", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpdateManyProperty_RequestArgs_1.UpdateManyProperty_RequestArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], Property_RequestCrudResolver.prototype, "updateManyProperty_Request", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Property_Request_1.Property_Request, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpsertProperty_RequestArgs_1.UpsertProperty_RequestArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], Property_RequestCrudResolver.prototype, "upsertProperty_Request", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => AggregateProperty_Request_1.AggregateProperty_Request, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, AggregateProperty_RequestArgs_1.AggregateProperty_RequestArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], Property_RequestCrudResolver.prototype, "aggregateProperty_Request", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => [Property_RequestGroupBy_1.Property_RequestGroupBy], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, GroupByProperty_RequestArgs_1.GroupByProperty_RequestArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], Property_RequestCrudResolver.prototype, "groupByProperty_Request", null);
Property_RequestCrudResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Property_Request_1.Property_Request)
], Property_RequestCrudResolver);
exports.Property_RequestCrudResolver = Property_RequestCrudResolver;
