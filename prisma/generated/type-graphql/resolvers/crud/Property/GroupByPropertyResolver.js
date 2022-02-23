"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByPropertyResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const GroupByPropertyArgs_1 = require("./args/GroupByPropertyArgs");
const Property_1 = require("../../../models/Property");
const PropertyGroupBy_1 = require("../../outputs/PropertyGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByPropertyResolver = class GroupByPropertyResolver {
    async groupByProperty(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).property.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => [PropertyGroupBy_1.PropertyGroupBy], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, GroupByPropertyArgs_1.GroupByPropertyArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], GroupByPropertyResolver.prototype, "groupByProperty", null);
GroupByPropertyResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Property_1.Property)
], GroupByPropertyResolver);
exports.GroupByPropertyResolver = GroupByPropertyResolver;
