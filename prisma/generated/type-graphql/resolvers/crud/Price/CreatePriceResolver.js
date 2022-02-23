"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePriceResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const CreatePriceArgs_1 = require("./args/CreatePriceArgs");
const Price_1 = require("../../../models/Price");
const helpers_1 = require("../../../helpers");
let CreatePriceResolver = class CreatePriceResolver {
    async createPrice(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).price.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Price_1.Price, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, CreatePriceArgs_1.CreatePriceArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], CreatePriceResolver.prototype, "createPrice", null);
CreatePriceResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Price_1.Price)
], CreatePriceResolver);
exports.CreatePriceResolver = CreatePriceResolver;
