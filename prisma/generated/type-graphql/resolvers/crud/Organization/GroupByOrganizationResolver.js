"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByOrganizationResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const GroupByOrganizationArgs_1 = require("./args/GroupByOrganizationArgs");
const Organization_1 = require("../../../models/Organization");
const OrganizationGroupBy_1 = require("../../outputs/OrganizationGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByOrganizationResolver = class GroupByOrganizationResolver {
    async groupByOrganization(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).organization.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => [OrganizationGroupBy_1.OrganizationGroupBy], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, GroupByOrganizationArgs_1.GroupByOrganizationArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], GroupByOrganizationResolver.prototype, "groupByOrganization", null);
GroupByOrganizationResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Organization_1.Organization)
], GroupByOrganizationResolver);
exports.GroupByOrganizationResolver = GroupByOrganizationResolver;
