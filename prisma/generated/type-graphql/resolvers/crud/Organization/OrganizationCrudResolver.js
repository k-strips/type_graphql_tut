"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const AggregateOrganizationArgs_1 = require("./args/AggregateOrganizationArgs");
const CreateManyOrganizationArgs_1 = require("./args/CreateManyOrganizationArgs");
const CreateOrganizationArgs_1 = require("./args/CreateOrganizationArgs");
const DeleteManyOrganizationArgs_1 = require("./args/DeleteManyOrganizationArgs");
const DeleteOrganizationArgs_1 = require("./args/DeleteOrganizationArgs");
const FindFirstOrganizationArgs_1 = require("./args/FindFirstOrganizationArgs");
const FindManyOrganizationArgs_1 = require("./args/FindManyOrganizationArgs");
const FindUniqueOrganizationArgs_1 = require("./args/FindUniqueOrganizationArgs");
const GroupByOrganizationArgs_1 = require("./args/GroupByOrganizationArgs");
const UpdateManyOrganizationArgs_1 = require("./args/UpdateManyOrganizationArgs");
const UpdateOrganizationArgs_1 = require("./args/UpdateOrganizationArgs");
const UpsertOrganizationArgs_1 = require("./args/UpsertOrganizationArgs");
const helpers_1 = require("../../../helpers");
const Organization_1 = require("../../../models/Organization");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateOrganization_1 = require("../../outputs/AggregateOrganization");
const OrganizationGroupBy_1 = require("../../outputs/OrganizationGroupBy");
let OrganizationCrudResolver = class OrganizationCrudResolver {
    async organization(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).organization.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstOrganization(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).organization.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async organizations(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).organization.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOrganization(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).organization.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyOrganization(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).organization.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOrganization(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).organization.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOrganization(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).organization.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyOrganization(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).organization.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyOrganization(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).organization.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOrganization(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).organization.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateOrganization(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).organization.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByOrganization(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).organization.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => Organization_1.Organization, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindUniqueOrganizationArgs_1.FindUniqueOrganizationArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], OrganizationCrudResolver.prototype, "organization", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => Organization_1.Organization, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindFirstOrganizationArgs_1.FindFirstOrganizationArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], OrganizationCrudResolver.prototype, "findFirstOrganization", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => [Organization_1.Organization], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindManyOrganizationArgs_1.FindManyOrganizationArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], OrganizationCrudResolver.prototype, "organizations", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Organization_1.Organization, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, CreateOrganizationArgs_1.CreateOrganizationArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], OrganizationCrudResolver.prototype, "createOrganization", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, CreateManyOrganizationArgs_1.CreateManyOrganizationArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], OrganizationCrudResolver.prototype, "createManyOrganization", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Organization_1.Organization, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, DeleteOrganizationArgs_1.DeleteOrganizationArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], OrganizationCrudResolver.prototype, "deleteOrganization", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Organization_1.Organization, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpdateOrganizationArgs_1.UpdateOrganizationArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], OrganizationCrudResolver.prototype, "updateOrganization", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, DeleteManyOrganizationArgs_1.DeleteManyOrganizationArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], OrganizationCrudResolver.prototype, "deleteManyOrganization", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpdateManyOrganizationArgs_1.UpdateManyOrganizationArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], OrganizationCrudResolver.prototype, "updateManyOrganization", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Organization_1.Organization, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpsertOrganizationArgs_1.UpsertOrganizationArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], OrganizationCrudResolver.prototype, "upsertOrganization", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => AggregateOrganization_1.AggregateOrganization, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, AggregateOrganizationArgs_1.AggregateOrganizationArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], OrganizationCrudResolver.prototype, "aggregateOrganization", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => [OrganizationGroupBy_1.OrganizationGroupBy], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, GroupByOrganizationArgs_1.GroupByOrganizationArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], OrganizationCrudResolver.prototype, "groupByOrganization", null);
OrganizationCrudResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Organization_1.Organization)
], OrganizationCrudResolver);
exports.OrganizationCrudResolver = OrganizationCrudResolver;
