"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManySaveResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const UpdateManySaveArgs_1 = require("./args/UpdateManySaveArgs");
const Save_1 = require("../../../models/Save");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManySaveResolver = class UpdateManySaveResolver {
    async updateManySave(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).save.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
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
], UpdateManySaveResolver.prototype, "updateManySave", null);
UpdateManySaveResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Save_1.Save)
], UpdateManySaveResolver);
exports.UpdateManySaveResolver = UpdateManySaveResolver;
