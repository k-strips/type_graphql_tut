"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertLandSizeResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const UpsertLandSizeArgs_1 = require("./args/UpsertLandSizeArgs");
const LandSize_1 = require("../../../models/LandSize");
const helpers_1 = require("../../../helpers");
let UpsertLandSizeResolver = class UpsertLandSizeResolver {
    async upsertLandSize(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).landSize.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
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
], UpsertLandSizeResolver.prototype, "upsertLandSize", null);
UpsertLandSizeResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => LandSize_1.LandSize)
], UpsertLandSizeResolver);
exports.UpsertLandSizeResolver = UpsertLandSizeResolver;
