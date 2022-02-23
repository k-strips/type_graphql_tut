"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePriceResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const UpdatePriceArgs_1 = require("./args/UpdatePriceArgs");
const Price_1 = require("../../../models/Price");
const helpers_1 = require("../../../helpers");
let UpdatePriceResolver = class UpdatePriceResolver {
    async updatePrice(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).price.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Price_1.Price, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpdatePriceArgs_1.UpdatePriceArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UpdatePriceResolver.prototype, "updatePrice", null);
UpdatePriceResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Price_1.Price)
], UpdatePriceResolver);
exports.UpdatePriceResolver = UpdatePriceResolver;
