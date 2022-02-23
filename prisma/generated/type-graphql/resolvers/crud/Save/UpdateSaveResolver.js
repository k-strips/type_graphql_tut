"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSaveResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const UpdateSaveArgs_1 = require("./args/UpdateSaveArgs");
const Save_1 = require("../../../models/Save");
const helpers_1 = require("../../../helpers");
let UpdateSaveResolver = class UpdateSaveResolver {
    async updateSave(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).save.update({
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
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpdateSaveArgs_1.UpdateSaveArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UpdateSaveResolver.prototype, "updateSave", null);
UpdateSaveResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Save_1.Save)
], UpdateSaveResolver);
exports.UpdateSaveResolver = UpdateSaveResolver;
