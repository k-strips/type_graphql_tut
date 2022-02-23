"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByProperty_RequestResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const GroupByProperty_RequestArgs_1 = require("./args/GroupByProperty_RequestArgs");
const Property_Request_1 = require("../../../models/Property_Request");
const Property_RequestGroupBy_1 = require("../../outputs/Property_RequestGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByProperty_RequestResolver = class GroupByProperty_RequestResolver {
    async groupByProperty_Request(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).property_Request.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => [Property_RequestGroupBy_1.Property_RequestGroupBy], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, GroupByProperty_RequestArgs_1.GroupByProperty_RequestArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], GroupByProperty_RequestResolver.prototype, "groupByProperty_Request", null);
GroupByProperty_RequestResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Property_Request_1.Property_Request)
], GroupByProperty_RequestResolver);
exports.GroupByProperty_RequestResolver = GroupByProperty_RequestResolver;
