"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const AggregateSaveArgs_1 = require("./args/AggregateSaveArgs");
const CreateManySaveArgs_1 = require("./args/CreateManySaveArgs");
const CreateSaveArgs_1 = require("./args/CreateSaveArgs");
const DeleteManySaveArgs_1 = require("./args/DeleteManySaveArgs");
const DeleteSaveArgs_1 = require("./args/DeleteSaveArgs");
const FindFirstSaveArgs_1 = require("./args/FindFirstSaveArgs");
const FindManySaveArgs_1 = require("./args/FindManySaveArgs");
const FindUniqueSaveArgs_1 = require("./args/FindUniqueSaveArgs");
const GroupBySaveArgs_1 = require("./args/GroupBySaveArgs");
const UpdateManySaveArgs_1 = require("./args/UpdateManySaveArgs");
const UpdateSaveArgs_1 = require("./args/UpdateSaveArgs");
const UpsertSaveArgs_1 = require("./args/UpsertSaveArgs");
const helpers_1 = require("../../../helpers");
const Save_1 = require("../../../models/Save");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateSave_1 = require("../../outputs/AggregateSave");
const SaveGroupBy_1 = require("../../outputs/SaveGroupBy");
let SaveCrudResolver = class SaveCrudResolver {
    async save(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).save.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstSave(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).save.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async saves(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).save.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createSave(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).save.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManySave(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).save.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteSave(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).save.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateSave(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).save.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManySave(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).save.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManySave(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).save.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertSave(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).save.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateSave(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).save.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupBySave(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).save.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => Save_1.Save, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindUniqueSaveArgs_1.FindUniqueSaveArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SaveCrudResolver.prototype, "save", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => Save_1.Save, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindFirstSaveArgs_1.FindFirstSaveArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SaveCrudResolver.prototype, "findFirstSave", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => [Save_1.Save], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindManySaveArgs_1.FindManySaveArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SaveCrudResolver.prototype, "saves", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Save_1.Save, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, CreateSaveArgs_1.CreateSaveArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SaveCrudResolver.prototype, "createSave", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, CreateManySaveArgs_1.CreateManySaveArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SaveCrudResolver.prototype, "createManySave", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Save_1.Save, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, DeleteSaveArgs_1.DeleteSaveArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SaveCrudResolver.prototype, "deleteSave", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Save_1.Save, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpdateSaveArgs_1.UpdateSaveArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SaveCrudResolver.prototype, "updateSave", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, DeleteManySaveArgs_1.DeleteManySaveArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SaveCrudResolver.prototype, "deleteManySave", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpdateManySaveArgs_1.UpdateManySaveArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SaveCrudResolver.prototype, "updateManySave", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Save_1.Save, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpsertSaveArgs_1.UpsertSaveArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SaveCrudResolver.prototype, "upsertSave", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => AggregateSave_1.AggregateSave, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, AggregateSaveArgs_1.AggregateSaveArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SaveCrudResolver.prototype, "aggregateSave", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => [SaveGroupBy_1.SaveGroupBy], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, GroupBySaveArgs_1.GroupBySaveArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SaveCrudResolver.prototype, "groupBySave", null);
SaveCrudResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Save_1.Save)
], SaveCrudResolver);
exports.SaveCrudResolver = SaveCrudResolver;
