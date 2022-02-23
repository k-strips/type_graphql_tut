"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAdvertisementResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const UpdateAdvertisementArgs_1 = require("./args/UpdateAdvertisementArgs");
const Advertisement_1 = require("../../../models/Advertisement");
const helpers_1 = require("../../../helpers");
let UpdateAdvertisementResolver = class UpdateAdvertisementResolver {
    async updateAdvertisement(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).advertisement.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Advertisement_1.Advertisement, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpdateAdvertisementArgs_1.UpdateAdvertisementArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UpdateAdvertisementResolver.prototype, "updateAdvertisement", null);
UpdateAdvertisementResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Advertisement_1.Advertisement)
], UpdateAdvertisementResolver);
exports.UpdateAdvertisementResolver = UpdateAdvertisementResolver;
