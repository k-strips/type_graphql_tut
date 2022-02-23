"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueLandSizeResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const FindUniqueLandSizeArgs_1 = require("./args/FindUniqueLandSizeArgs");
const LandSize_1 = require("../../../models/LandSize");
const helpers_1 = require("../../../helpers");
let FindUniqueLandSizeResolver = class FindUniqueLandSizeResolver {
    async landSize(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).landSize.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => LandSize_1.LandSize, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindUniqueLandSizeArgs_1.FindUniqueLandSizeArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], FindUniqueLandSizeResolver.prototype, "landSize", null);
FindUniqueLandSizeResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => LandSize_1.LandSize)
], FindUniqueLandSizeResolver);
exports.FindUniqueLandSizeResolver = FindUniqueLandSizeResolver;
