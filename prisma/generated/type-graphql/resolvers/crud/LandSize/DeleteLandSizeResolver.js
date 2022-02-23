"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteLandSizeResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const DeleteLandSizeArgs_1 = require("./args/DeleteLandSizeArgs");
const LandSize_1 = require("../../../models/LandSize");
const helpers_1 = require("../../../helpers");
let DeleteLandSizeResolver = class DeleteLandSizeResolver {
    async deleteLandSize(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).landSize.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
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
], DeleteLandSizeResolver.prototype, "deleteLandSize", null);
DeleteLandSizeResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => LandSize_1.LandSize)
], DeleteLandSizeResolver);
exports.DeleteLandSizeResolver = DeleteLandSizeResolver;
