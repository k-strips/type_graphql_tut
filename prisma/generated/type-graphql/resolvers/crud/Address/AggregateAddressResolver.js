"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateAddressResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const AggregateAddressArgs_1 = require("./args/AggregateAddressArgs");
const Address_1 = require("../../../models/Address");
const AggregateAddress_1 = require("../../outputs/AggregateAddress");
const helpers_1 = require("../../../helpers");
let AggregateAddressResolver = class AggregateAddressResolver {
    async aggregateAddress(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).address.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => AggregateAddress_1.AggregateAddress, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, AggregateAddressArgs_1.AggregateAddressArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AggregateAddressResolver.prototype, "aggregateAddress", null);
AggregateAddressResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Address_1.Address)
], AggregateAddressResolver);
exports.AggregateAddressResolver = AggregateAddressResolver;
