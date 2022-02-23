"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateLandSizeResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const CreateLandSizeArgs_1 = require("./args/CreateLandSizeArgs");
const LandSize_1 = require("../../../models/LandSize");
const helpers_1 = require("../../../helpers");
let CreateLandSizeResolver = class CreateLandSizeResolver {
    async createLandSize(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).landSize.create({
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
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, CreateLandSizeArgs_1.CreateLandSizeArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], CreateLandSizeResolver.prototype, "createLandSize", null);
CreateLandSizeResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => LandSize_1.LandSize)
], CreateLandSizeResolver);
exports.CreateLandSizeResolver = CreateLandSizeResolver;
