"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByAddressResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const GroupByAddressArgs_1 = require("./args/GroupByAddressArgs");
const Address_1 = require("../../../models/Address");
const AddressGroupBy_1 = require("../../outputs/AddressGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByAddressResolver = class GroupByAddressResolver {
    async groupByAddress(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).address.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => [AddressGroupBy_1.AddressGroupBy], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, GroupByAddressArgs_1.GroupByAddressArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], GroupByAddressResolver.prototype, "groupByAddress", null);
GroupByAddressResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Address_1.Address)
], GroupByAddressResolver);
exports.GroupByAddressResolver = GroupByAddressResolver;
