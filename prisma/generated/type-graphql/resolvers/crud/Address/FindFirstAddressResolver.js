"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstAddressResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const FindFirstAddressArgs_1 = require("./args/FindFirstAddressArgs");
const Address_1 = require("../../../models/Address");
const helpers_1 = require("../../../helpers");
let FindFirstAddressResolver = class FindFirstAddressResolver {
    async findFirstAddress(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).address.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => Address_1.Address, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindFirstAddressArgs_1.FindFirstAddressArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], FindFirstAddressResolver.prototype, "findFirstAddress", null);
FindFirstAddressResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Address_1.Address)
], FindFirstAddressResolver);
exports.FindFirstAddressResolver = FindFirstAddressResolver;
