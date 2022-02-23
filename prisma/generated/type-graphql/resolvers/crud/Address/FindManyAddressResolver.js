"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyAddressResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const FindManyAddressArgs_1 = require("./args/FindManyAddressArgs");
const Address_1 = require("../../../models/Address");
const helpers_1 = require("../../../helpers");
let FindManyAddressResolver = class FindManyAddressResolver {
    async addresses(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).address.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => [Address_1.Address], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindManyAddressArgs_1.FindManyAddressArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], FindManyAddressResolver.prototype, "addresses", null);
FindManyAddressResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Address_1.Address)
], FindManyAddressResolver);
exports.FindManyAddressResolver = FindManyAddressResolver;
