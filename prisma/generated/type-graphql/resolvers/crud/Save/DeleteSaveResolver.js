"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteSaveResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const DeleteSaveArgs_1 = require("./args/DeleteSaveArgs");
const Save_1 = require("../../../models/Save");
const helpers_1 = require("../../../helpers");
let DeleteSaveResolver = class DeleteSaveResolver {
    async deleteSave(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).save.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
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
], DeleteSaveResolver.prototype, "deleteSave", null);
DeleteSaveResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Save_1.Save)
], DeleteSaveResolver);
exports.DeleteSaveResolver = DeleteSaveResolver;
