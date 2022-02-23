"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const AggregateAddressArgs_1 = require("./args/AggregateAddressArgs");
const CreateAddressArgs_1 = require("./args/CreateAddressArgs");
const CreateManyAddressArgs_1 = require("./args/CreateManyAddressArgs");
const DeleteAddressArgs_1 = require("./args/DeleteAddressArgs");
const DeleteManyAddressArgs_1 = require("./args/DeleteManyAddressArgs");
const FindFirstAddressArgs_1 = require("./args/FindFirstAddressArgs");
const FindManyAddressArgs_1 = require("./args/FindManyAddressArgs");
const FindUniqueAddressArgs_1 = require("./args/FindUniqueAddressArgs");
const GroupByAddressArgs_1 = require("./args/GroupByAddressArgs");
const UpdateAddressArgs_1 = require("./args/UpdateAddressArgs");
const UpdateManyAddressArgs_1 = require("./args/UpdateManyAddressArgs");
const UpsertAddressArgs_1 = require("./args/UpsertAddressArgs");
const helpers_1 = require("../../../helpers");
const Address_1 = require("../../../models/Address");
const AddressGroupBy_1 = require("../../outputs/AddressGroupBy");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateAddress_1 = require("../../outputs/AggregateAddress");
let AddressCrudResolver = class AddressCrudResolver {
    async address(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).address.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstAddress(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).address.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async addresses(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).address.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createAddress(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).address.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyAddress(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).address.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteAddress(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).address.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateAddress(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).address.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyAddress(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).address.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyAddress(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).address.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertAddress(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).address.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateAddress(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).address.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByAddress(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).address.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => Address_1.Address, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindUniqueAddressArgs_1.FindUniqueAddressArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AddressCrudResolver.prototype, "address", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => Address_1.Address, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindFirstAddressArgs_1.FindFirstAddressArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AddressCrudResolver.prototype, "findFirstAddress", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => [Address_1.Address], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindManyAddressArgs_1.FindManyAddressArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AddressCrudResolver.prototype, "addresses", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Address_1.Address, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, CreateAddressArgs_1.CreateAddressArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AddressCrudResolver.prototype, "createAddress", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, CreateManyAddressArgs_1.CreateManyAddressArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AddressCrudResolver.prototype, "createManyAddress", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Address_1.Address, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, DeleteAddressArgs_1.DeleteAddressArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AddressCrudResolver.prototype, "deleteAddress", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Address_1.Address, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpdateAddressArgs_1.UpdateAddressArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AddressCrudResolver.prototype, "updateAddress", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, DeleteManyAddressArgs_1.DeleteManyAddressArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AddressCrudResolver.prototype, "deleteManyAddress", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpdateManyAddressArgs_1.UpdateManyAddressArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AddressCrudResolver.prototype, "updateManyAddress", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Address_1.Address, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpsertAddressArgs_1.UpsertAddressArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AddressCrudResolver.prototype, "upsertAddress", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => AggregateAddress_1.AggregateAddress, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, AggregateAddressArgs_1.AggregateAddressArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AddressCrudResolver.prototype, "aggregateAddress", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => [AddressGroupBy_1.AddressGroupBy], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, GroupByAddressArgs_1.GroupByAddressArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AddressCrudResolver.prototype, "groupByAddress", null);
AddressCrudResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Address_1.Address)
], AddressCrudResolver);
exports.AddressCrudResolver = AddressCrudResolver;
