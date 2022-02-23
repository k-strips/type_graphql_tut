"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateOrganizationResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const AggregateOrganizationArgs_1 = require("./args/AggregateOrganizationArgs");
const Organization_1 = require("../../../models/Organization");
const AggregateOrganization_1 = require("../../outputs/AggregateOrganization");
const helpers_1 = require("../../../helpers");
let AggregateOrganizationResolver = class AggregateOrganizationResolver {
    async aggregateOrganization(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).organization.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => AggregateOrganization_1.AggregateOrganization, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, AggregateOrganizationArgs_1.AggregateOrganizationArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AggregateOrganizationResolver.prototype, "aggregateOrganization", null);
AggregateOrganizationResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Organization_1.Organization)
], AggregateOrganizationResolver);
exports.AggregateOrganizationResolver = AggregateOrganizationResolver;
